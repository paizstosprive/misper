const { Payment, User } = require('../models');
const stripeService = require('../services/stripeService');
const { SUBSCRIPTION_PLANS } = require('../utils/constants');

async function createCheckout(req, res) {
  try {
    const planCode = req.body.planCode;
    const user = await User.findByPk(req.session.user.id);

    if (!SUBSCRIPTION_PLANS[planCode]) {
      req.flash('error', 'Formule invalide.');
      return res.redirect('/pricing');
    }

    const session = await stripeService.createCheckoutSession({ user, planCode });

    await Payment.create({
      userId: user.id,
      provider: 'stripe',
      providerSessionId: session.id,
      amount: SUBSCRIPTION_PLANS[planCode].amount,
      status: 'pending',
      metadata: { planCode }
    });

    return res.redirect(session.url);
  } catch (error) {
    req.flash('error', error.message || 'Impossible de lancer le paiement Stripe.');
    return res.redirect('/pricing');
  }
}

function success(req, res) {
  res.render('subscription/success', { title: 'Paiement confirme' });
}

function cancel(req, res) {
  res.render('subscription/cancel', { title: 'Paiement annule' });
}

module.exports = {
  createCheckout,
  success,
  cancel
};
