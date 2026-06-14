'use strict';

module.exports = (sequelize, DataTypes) => {
  const QuizAnswer = sequelize.define(
    'QuizAnswer',
    {
      attemptId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      questionId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      questionOrder: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      selectedChoice: {
        type: DataTypes.ENUM('A', 'B', 'C'),
        allowNull: true
      },
      correctChoice: {
        type: DataTypes.ENUM('A', 'B', 'C'),
        allowNull: false
      },
      isCorrect: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    },
    {
      tableName: 'QuizAnswers'
    }
  );

  QuizAnswer.associate = (models) => {
    QuizAnswer.belongsTo(models.QuizAttempt, { foreignKey: 'attemptId', as: 'attempt' });
    QuizAnswer.belongsTo(models.Question, { foreignKey: 'questionId', as: 'question' });
  };

  return QuizAnswer;
};
