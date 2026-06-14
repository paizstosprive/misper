'use strict';

module.exports = (sequelize, DataTypes) => {
  const QuizAttempt = sequelize.define(
    'QuizAttempt',
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      score: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      totalQuestions: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 15
      },
      chapterCode: {
        type: DataTypes.STRING,
        allowNull: true
      },
      status: {
        type: DataTypes.ENUM('in_progress', 'completed'),
        allowNull: false,
        defaultValue: 'in_progress'
      },
      completedAt: {
        type: DataTypes.DATE,
        allowNull: true
      }
    },
    {
      tableName: 'QuizAttempts'
    }
  );

  QuizAttempt.associate = (models) => {
    QuizAttempt.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    QuizAttempt.hasMany(models.QuizAnswer, { foreignKey: 'attemptId', as: 'answers' });
  };

  return QuizAttempt;
};
