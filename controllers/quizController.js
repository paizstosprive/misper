const { Op } = require('sequelize');
const { QuizAttempt, QuizAnswer, Question } = require('../models');
const { createAttempt, getCurrentQuestion, answerQuestion, finalizeAttempt } = require('../services/quizService');
const { CHAPTERS } = require('../utils/constants');

function showStart(req, res) {
  res.render('quiz/start', {
    title: 'Demarrer un quiz',
    chapters: CHAPTERS
  });
}

async function startQuiz(req, res) {
  try {
    const attempt = await createAttempt({
      userId: req.session.user.id,
      mode: req.body.mode,
      chapterCode: req.body.chapterCode || null
    });

    req.flash('success', 'Serie lancee.');
    return res.redirect(`/quiz/${attempt.id}`);
  } catch (error) {
    req.flash('error', error.message);
    return res.redirect('/quiz/start');
  }
}

async function showQuiz(req, res) {
  const attempt = await QuizAttempt.findOne({ where: { id: req.params.id, userId: req.session.user.id } });
  if (!attempt) {
    req.flash('error', 'Serie introuvable.');
    return res.redirect('/dashboard');
  }

  if (attempt.status === 'completed') {
    return res.redirect(`/quiz/result/${attempt.id}`);
  }

  const currentQuestion = await getCurrentQuestion(attempt.id);
  if (!currentQuestion) {
    await finalizeAttempt(attempt.id);
    return res.redirect(`/quiz/result/${attempt.id}`);
  }

  const answeredCount = await QuizAnswer.count({
    where: { attemptId: attempt.id, selectedChoice: { [Op.not]: null } }
  });

  return res.render('quiz/question', {
    title: 'Quiz',
    attempt,
    quizAnswer: currentQuestion,
    progress: answeredCount + 1
  });
}

async function submitAnswer(req, res) {
  const attempt = await QuizAttempt.findOne({ where: { id: req.params.id, userId: req.session.user.id } });
  if (!attempt || attempt.status === 'completed') {
    req.flash('error', 'Serie invalide.');
    return res.redirect('/dashboard');
  }

  await answerQuestion({
    attemptId: attempt.id,
    questionOrder: Number(req.body.questionOrder),
    selectedChoice: req.body.selectedChoice
  });

  const nextQuestion = await getCurrentQuestion(attempt.id);
  if (!nextQuestion) {
    await finalizeAttempt(attempt.id);
    req.flash('success', 'Quiz termine.');
    return res.redirect(`/quiz/result/${attempt.id}`);
  }

  return res.redirect(`/quiz/${attempt.id}`);
}

async function showResult(req, res) {
  const attempt = await QuizAttempt.findOne({
    where: { id: req.params.attemptId, userId: req.session.user.id },
    include: [
      {
        model: QuizAnswer,
        as: 'answers',
        include: [{ model: Question, as: 'question' }]
      }
    ]
  });

  if (!attempt) {
    req.flash('error', 'Resultat introuvable.');
    return res.redirect('/dashboard');
  }

  return res.render('quiz/result', {
    title: 'Resultat du quiz',
    attempt
  });
}

module.exports = {
  showStart,
  startQuiz,
  showQuiz,
  submitAnswer,
  showResult
};
