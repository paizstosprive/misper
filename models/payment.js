'use strict';

module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define(
    'Payment',
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      subscriptionId: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      provider: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'stripe'
      },
      providerPaymentId: {
        type: DataTypes.STRING,
        allowNull: true
      },
      providerSessionId: {
        type: DataTypes.STRING,
        allowNull: true
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      currency: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'eur'
      },
      status: {
        type: DataTypes.ENUM('pending', 'paid', 'failed', 'cancelled'),
        allowNull: false,
        defaultValue: 'pending'
      },
      metadata: {
        type: DataTypes.JSON,
        allowNull: true
      },
      paidAt: {
        type: DataTypes.DATE,
        allowNull: true
      }
    },
    {
      tableName: 'Payments'
    }
  );

  Payment.associate = (models) => {
    Payment.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    Payment.belongsTo(models.Subscription, { foreignKey: 'subscriptionId', as: 'subscription' });
  };

  return Payment;
};
