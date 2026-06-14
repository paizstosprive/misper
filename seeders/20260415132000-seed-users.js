'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface) {
    const now = new Date();
    const adminPassword = await bcrypt.hash('admin123', 12);
    const userPassword = await bcrypt.hash('user1234', 12);

    await queryInterface.bulkInsert('Users', [
      {
        firstName: 'Admin',
        lastName: 'Demo',
        email: 'admin@example.com',
        passwordHash: adminPassword,
        role: 'admin',
        hasActiveSubscription: true,
        subscriptionType: 'pass1month',
        subscriptionStartDate: now,
        subscriptionEndDate: new Date(now.getTime() + 1000 * 60 * 60 * 24 * 30),
        freeSeriesUsed: 0,
        createdAt: now,
        updatedAt: now
      },
      {
        firstName: 'User',
        lastName: 'Demo',
        email: 'user@example.com',
        passwordHash: userPassword,
        role: 'user',
        hasActiveSubscription: false,
        subscriptionType: null,
        subscriptionStartDate: null,
        subscriptionEndDate: null,
        freeSeriesUsed: 0,
        createdAt: now,
        updatedAt: now
      }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', {
      email: ['admin@example.com', 'user@example.com']
    });
  }
};
