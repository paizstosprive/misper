const { Question, User, Payment } = require('../models');
const { CHAPTERS } = require('../utils/constants');

async function listQuestions(req, res) {
  const where = req.query.chapter ? { chapterCode: req.query.chapter } : {};
  const questions = await Question.findAll({ where, order: [['id', 'ASC']] });
  res.render('admin/questions/index', {
    title: 'Questions',
    questions,
    chapters: CHAPTERS,
    selectedChapter: req.query.chapter || ''
  });
}

function newQuestion(req, res) {
  res.render('admin/questions/form', {
    title: 'Nouvelle question',
    question: null,
    chapters: CHAPTERS,
    formAction: '/admin/questions',
    method: 'POST'
  });
}

async function createQuestion(req, res) {
  await Question.create(req.body);
  req.flash('success', 'Question ajoutee.');
  res.redirect('/admin/questions');
}

async function editQuestion(req, res) {
  const question = await Question.findByPk(req.params.id);
  res.render('admin/questions/form', {
    title: 'Modifier question',
    question,
    chapters: CHAPTERS,
    formAction: `/admin/questions/${question.id}?_method=PUT`,
    method: 'POST'
  });
}

async function updateQuestion(req, res) {
  const question = await Question.findByPk(req.params.id);
  await question.update(req.body);
  req.flash('success', 'Question mise a jour.');
  res.redirect('/admin/questions');
}

async function deleteQuestion(req, res) {
  const question = await Question.findByPk(req.params.id);
  await question.destroy();
  req.flash('success', 'Question supprimee.');
  res.redirect('/admin/questions');
}

async function listUsers(req, res) {
  const users = await User.findAll({ order: [['createdAt', 'DESC']] });
  res.render('admin/users', { title: 'Utilisateurs', users });
}

async function listPayments(req, res) {
  const payments = await Payment.findAll({
    include: ['user', 'subscription'],
    order: [['createdAt', 'DESC']]
  });
  res.render('admin/payments', { title: 'Paiements', payments });
}

module.exports = {
  listQuestions,
  newQuestion,
  createQuestion,
  editQuestion,
  updateQuestion,
  deleteQuestion,
  listUsers,
  listPayments
};
