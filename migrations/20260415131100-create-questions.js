'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      chapterCode: {
        type: Sequelize.STRING,
        allowNull: false
      },
      chapterTitle: {
        type: Sequelize.STRING,
        allowNull: false
      },
      questionText: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      choiceA: {
        type: Sequelize.STRING,
        allowNull: false
      },
      choiceB: {
        type: Sequelize.STRING,
        allowNull: false
      },
      choiceC: {
        type: Sequelize.STRING,
        allowNull: false
      },
      correctChoice: {
        type: Sequelize.ENUM('A', 'B', 'C'),
        allowNull: false
      },
      explanation: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      imagePath: {
        type: Sequelize.STRING,
        allowNull: false
      },
      difficulty: {
        type: Sequelize.ENUM('beginner', 'intermediate'),
        allowNull: false,
        defaultValue: 'beginner'
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
    await queryInterface.dropTable('Questions');
  }
};
