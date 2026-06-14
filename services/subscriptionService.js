const { User, Subscription } = require('../models');
const { SUBSCRIPTION_PLANS } = require('../utils/constants');

function computeEndDate(startDate, planCode) {
  const plan = SUBSCRIPTION_PLANS[planCode];
  if (!plan) {
    throw new Error('Plan inconnu');
  }

  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + plan.durationDays);
  return endDate;
}

async function activateSubscription({ userId, planCode, stripeSessionId, stripePaymentIntentId }) {
  const startDate = new Date();
  const endDate = computeEndDate(startDate, planCode);

  const subscription = await Subscription.create({
    userId,
    provider: 'stripe',
    planCode,
    status: 'active',
    startDate,
    endDate,
    stripeSessionId,
    stripePaymentIntentId
  });

  await User.update(
    {
      hasActiveSubscription: true,
      subscriptionType: planCode,
      subscriptionStartDate: startDate,
      subscriptionEndDate: endDate
    },
    { where: { id: userId } }
  );

  return subscription;
}

async function syncSubscriptionStatus(req, res, next) {
  if (!req.session.user) {
    return next();
  }

  const user = await User.findByPk(req.session.user.id);
  if (!user) {
    req.session.destroy(() => {});
    return next();
  }

  let changed = false;
  if (user.hasActiveSubscription && user.subscriptionEndDate && new Date(user.subscriptionEndDate) <= new Date()) {
    await user.update({
      hasActiveSubscription: false,
      subscriptionType: null,
      subscriptionStartDate: null,
      subscriptionEndDate: null
    });
    await Subscription.update({ status: 'expired' }, { where: { userId: user.id, status: 'active' } });
    changed = true;
  }

  req.session.user = {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    role: user.role,
    hasActiveSubscription: user.hasActiveSubscription,
    subscriptionEndDate: user.subscriptionEndDate,
    freeSeriesUsed: user.freeSeriesUsed
  };

  if (changed) {
    req.flash('error', 'Votre abonnement a expire.');
  }

  return next();
}

module.exports = {
  activateSubscription,
  computeEndDate,
  syncSubscriptionStatus
};
