class PaymentProvider {
  async createCheckoutSession() {
    throw new Error('Not implemented');
  }

  async constructWebhookEvent() {
    throw new Error('Not implemented');
  }
}

module.exports = PaymentProvider;
