'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Payments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      subscriptionId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Subscriptions',
          key: 'id'
        },
        onDelete: 'SET NULL'
      },
      provider: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'stripe'
      },
      providerPaymentId: {
        type: Sequelize.STRING,
        allowNull: true
      },
      providerSessionId: {
        type: Sequelize.STRING,
        allowNull: true
      },
      amount: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      currency: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'eur'
      },
      status: {
        type: Sequelize.ENUM('pending', 'paid', 'failed', 'cancelled'),
        allowNull: false,
        defaultValue: 'pending'
      },
      metadata: {
        type: Sequelize.JSON,
        allowNull: true
      },
      paidAt: {
        type: Sequelize.DATE,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Payments');
  }
};
