'use strict';

module.exports = (sequelize, DataTypes) => {
  const Subscription = sequelize.define(
    'Subscription',
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      provider: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'stripe'
      },
      planCode: {
        type: DataTypes.STRING,
        allowNull: false
      },
      status: {
        type: DataTypes.ENUM('pending', 'active', 'expired', 'cancelled'),
        allowNull: false,
        defaultValue: 'pending'
      },
      startDate: {
        type: DataTypes.DATE,
        allowNull: true
      },
      endDate: {
        type: DataTypes.DATE,
        allowNull: true
      },
      stripeSessionId: {
        type: DataTypes.STRING,
        allowNull: true
      },
      stripePaymentIntentId: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    {
      tableName: 'Subscriptions'
    }
  );

  Subscription.associate = (models) => {
    Subscription.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    Subscription.hasMany(models.Payment, { foreignKey: 'subscriptionId', as: 'payments' });
  };

  return Subscription;
};
