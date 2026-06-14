'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('QuizAnswers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      attemptId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'QuizAttempts',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      questionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Questions',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      questionOrder: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      selectedChoice: {
        type: Sequelize.ENUM('A', 'B', 'C'),
        allowNull: true
      },
      correctChoice: {
        type: Sequelize.ENUM('A', 'B', 'C'),
        allowNull: false
      },
      isCorrect: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
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
    await queryInterface.dropTable('QuizAnswers');
  }
};
