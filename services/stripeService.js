const Stripe = require('stripe');
const PaymentProvider = require('./paymentProvider');
const { SUBSCRIPTION_PLANS } = require('../utils/constants');

class StripeService extends PaymentProvider {
  constructor() {
    super();
    this.stripe = null;
  }

  getClient() {
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error('STRIPE_SECRET_KEY manquant');
    }

    if (!this.stripe) {
      this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    }

    return this.stripe;
  }

  async createCheckoutSession({ user, planCode }) {
    const plan = SUBSCRIPTION_PLANS[planCode];
    if (!plan) {
      throw new Error('Plan Stripe inconnu');
    }

    const priceId = process.env[plan.priceEnvKey] || (plan.legacyPriceEnvKey && process.env[plan.legacyPriceEnvKey]);
    if (!priceId) {
      const envKeys = [plan.priceEnvKey, plan.legacyPriceEnvKey].filter(Boolean).join(' ou ');
      throw new Error(`Prix Stripe manquant pour ${planCode}. Ajoutez ${envKeys} dans .env.`);
    }

    return this.getClient().checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [{ price: priceId, quantity: 1 }],
      customer_email: user.email,
      success_url: `${process.env.APP_URL}/subscription/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.APP_URL}/subscription/cancel`,
      metadata: {
        userId: String(user.id),
        planCode
      }
    });
  }

  constructWebhookEvent(payload, signature) {
    return this.getClient().webhooks.constructEvent(payload, signature, process.env.STRIPE_WEBHOOK_SECRET);
  }
}

module.exports = new StripeService();
