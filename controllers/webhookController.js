const { Payment } = require('../models');
const stripeService = require('../services/stripeService');
const { activateSubscription } = require('../services/subscriptionService');

async function stripeWebhook(req, res) {
  try {
    const event = stripeService.constructWebhookEvent(req.body, req.headers['stripe-signature']);

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      const userId = Number(session.metadata.userId);
      const planCode = session.metadata.planCode;

      const payment = await Payment.findOne({ where: { providerSessionId: session.id } });
      if (payment && payment.status !== 'paid') {
        const subscription = await activateSubscription({
          userId,
          planCode,
          stripeSessionId: session.id,
          stripePaymentIntentId: session.payment_intent
        });

        await payment.update({
          subscriptionId: subscription.id,
          providerPaymentId: session.payment_intent,
          status: 'paid',
          paidAt: new Date()
        });
      }
    }

    return res.json({ received: true });
  } catch (error) {
    return res.status(400).send(`Webhook Error: ${error.message}`);
  }
}

module.exports = {
  stripeWebhook
};
