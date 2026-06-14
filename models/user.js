'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      passwordHash: {
        type: DataTypes.STRING,
        allowNull: false
      },
      role: {
        type: DataTypes.ENUM('user', 'admin'),
        allowNull: false,
        defaultValue: 'user'
      },
      hasActiveSubscription: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      subscriptionType: {
        type: DataTypes.STRING,
        allowNull: true
      },
      subscriptionStartDate: {
        type: DataTypes.DATE,
        allowNull: true
      },
      subscriptionEndDate: {
        type: DataTypes.DATE,
        allowNull: true
      },
      freeSeriesUsed: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      }
    },
    {
      tableName: 'Users'
    }
  );

  User.associate = (models) => {
    User.hasMany(models.Subscription, { foreignKey: 'userId', as: 'subscriptions' });
    User.hasMany(models.Payment, { foreignKey: 'userId', as: 'payments' });
    User.hasMany(models.QuizAttempt, { foreignKey: 'userId', as: 'quizAttempts' });
  };

  return User;
};
