const { Op } = require('sequelize');
const { QuizAttempt, QuizAnswer, Question } = require('../models');
const { FREE_SERIES } = require('../utils/constants');

async function createAttempt({ userId, mode, chapterCode }) {
  let questions = [];
  let attemptChapterCode = null;

  if (mode === 'free_set_1' || mode === 'free_set_2') {
    const freeSeries = FREE_SERIES.find((item) => item.code === mode);
    questions = await Question.findAll({
      order: [['id', 'ASC']],
      limit: freeSeries.questionCount,
      offset: freeSeries.offset
    });
    attemptChapterCode = freeSeries.storageCode;
  } else if (mode === 'exam') {
    const allQuestions = await Question.findAll({ order: [['id', 'ASC']] });
    questions = allQuestions.sort(() => Math.random() - 0.5).slice(0, 50);
    attemptChapterCode = 'EXAM';
  } else if (mode === 'chapter') {
    if (!chapterCode) {
      throw new Error('Chapitre requis');
    }

    questions = await Question.findAll({
      where: { chapterCode },
      order: [['id', 'ASC']]
    });
    attemptChapterCode = chapterCode;
  } else {
    throw new Error('Mode de quiz invalide');
  }

  if (!questions.length) {
    throw new Error('Aucune question disponible pour cette selection.');
  }

  const attempt = await QuizAttempt.create({
    userId,
    chapterCode: attemptChapterCode,
    totalQuestions: questions.length
  });

  await QuizAnswer.bulkCreate(
    questions.map((question, index) => ({
      attemptId: attempt.id,
      questionId: question.id,
      questionOrder: index + 1,
      correctChoice: question.correctChoice
    }))
  );

  return attempt;
}

async function getAttemptWithAnswers(attemptId, userId) {
  return QuizAttempt.findOne({
    where: { id: attemptId, userId },
    include: [
      {
        model: QuizAnswer,
        as: 'answers',
        include: [{ model: Question, as: 'question' }],
        order: [['questionOrder', 'ASC']]
      }
    ]
  });
}

async function getCurrentQuestion(attemptId) {
  return QuizAnswer.findOne({
    where: {
      attemptId,
      selectedChoice: { [Op.is]: null }
    },
    include: [{ model: Question, as: 'question' }],
    order: [['questionOrder', 'ASC']]
  });
}

async function answerQuestion({ attemptId, questionOrder, selectedChoice }) {
  const quizAnswer = await QuizAnswer.findOne({ where: { attemptId, questionOrder } });
  if (!quizAnswer) {
    throw new Error('Question introuvable');
  }

  if (quizAnswer.selectedChoice) {
    return quizAnswer;
  }

  return quizAnswer.update({
    selectedChoice,
    isCorrect: selectedChoice === quizAnswer.correctChoice
  });
}

async function finalizeAttempt(attemptId) {
  const answers = await QuizAnswer.findAll({ where: { attemptId } });
  const score = answers.filter((answer) => answer.isCorrect).length;
  await QuizAttempt.update(
    {
      score,
      status: 'completed',
      completedAt: new Date()
    },
    { where: { id: attemptId } }
  );
}

module.exports = {
  createAttempt,
  getAttemptWithAnswers,
  getCurrentQuestion,
  answerQuestion,
  finalizeAttempt
};
