'use strict';

module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define(
    'Question',
    {
      chapterCode: {
        type: DataTypes.STRING,
        allowNull: false
      },
      chapterTitle: {
        type: DataTypes.STRING,
        allowNull: false
      },
      questionText: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      choiceA: {
        type: DataTypes.STRING,
        allowNull: false
      },
      choiceB: {
        type: DataTypes.STRING,
        allowNull: false
      },
      choiceC: {
        type: DataTypes.STRING,
        allowNull: false
      },
      correctChoice: {
        type: DataTypes.ENUM('A', 'B', 'C'),
        allowNull: false
      },
      explanation: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      imagePath: {
        type: DataTypes.STRING,
        allowNull: false
      },
      difficulty: {
        type: DataTypes.ENUM('beginner', 'intermediate'),
        allowNull: false,
        defaultValue: 'beginner'
      }
    },
    {
      tableName: 'Questions'
    }
  );

  Question.associate = (models) => {
    Question.hasMany(models.QuizAnswer, { foreignKey: 'questionId', as: 'quizAnswers' });
  };

  return Question;
};
