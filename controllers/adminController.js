const { Question, User, Payment, Subscription } = require('../models');
const { CHAPTERS, SUBSCRIPTION_PLANS } = require('../utils/constants');

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
  const where = req.query.filter === 'active' ? { hasActiveSubscription: true } : {};
  const users = await User.findAll({ where, order: [['createdAt', 'DESC']] });
  res.render('admin/users', {
    title: 'Utilisateurs',
    users,
    selectedFilter: req.query.filter || ''
  });
}

async function editUser(req, res) {
  const user = await User.findByPk(req.params.id);
  if (!user) {
    req.flash('error', 'Utilisateur introuvable.');
    return res.redirect('/admin/users');
  }

  return res.render('admin/user-form', {
    title: 'Modifier utilisateur',
    user,
    subscriptionPlans: Object.values(SUBSCRIPTION_PLANS),
    formAction: `/admin/users/${user.id}?_method=PUT`
  });
}

async function updateUser(req, res) {
  const user = await User.findByPk(req.params.id);
  if (!user) {
    req.flash('error', 'Utilisateur introuvable.');
    return res.redirect('/admin/users');
  }

  const selectedPlanCode = req.body.subscriptionType || '';
  const subscriptionEndDate = req.body.subscriptionEndDate
    ? new Date(`${req.body.subscriptionEndDate}T23:59:59`)
    : null;
  if (selectedPlanCode && !SUBSCRIPTION_PLANS[selectedPlanCode]) {
    req.flash('error', 'Formule d abonnement invalide.');
    return res.redirect(`/admin/users/${user.id}/edit`);
  }

  if (selectedPlanCode && (!subscriptionEndDate || subscriptionEndDate <= new Date())) {
    req.flash('error', 'Choisissez une date de fin future pour activer l abonnement.');
    return res.redirect(`/admin/users/${user.id}/edit`);
  }

  const hasActiveSubscription = Boolean(selectedPlanCode && subscriptionEndDate && subscriptionEndDate > new Date());
  const subscriptionStartDate = hasActiveSubscription ? new Date() : null;

  await user.update({
    firstName: req.body.firstName.trim(),
    lastName: req.body.lastName.trim(),
    email: req.body.email.trim().toLowerCase(),
    role: req.body.role === 'admin' ? 'admin' : 'user',
    hasActiveSubscription,
    subscriptionType: hasActiveSubscription ? selectedPlanCode : null,
    subscriptionStartDate,
    subscriptionEndDate: hasActiveSubscription ? subscriptionEndDate : null,
    freeSeriesUsed: Math.max(0, Number(req.body.freeSeriesUsed) || 0)
  });

  await Subscription.update(
    { status: hasActiveSubscription ? 'expired' : 'cancelled' },
    { where: { userId: user.id, status: 'active' } }
  );

  if (hasActiveSubscription) {
    await Subscription.create({
      userId: user.id,
      provider: 'admin',
      planCode: selectedPlanCode,
      status: 'active',
      startDate: subscriptionStartDate,
      endDate: subscriptionEndDate
    });
  }

  if (req.session.user?.id === user.id) {
    req.session.user = {
      ...req.session.user,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
      hasActiveSubscription: user.hasActiveSubscription,
      subscriptionEndDate: user.subscriptionEndDate,
      freeSeriesUsed: user.freeSeriesUsed
    };
  }

  req.flash('success', 'Utilisateur mis a jour.');
  return res.redirect('/admin/users');
}

async function deleteUser(req, res) {
  const user = await User.findByPk(req.params.id);
  if (!user) {
    req.flash('error', 'Utilisateur introuvable.');
    return res.redirect('/admin/users');
  }

  if (req.session.user?.id === user.id) {
    req.flash('error', 'Vous ne pouvez pas supprimer votre propre compte admin.');
    return res.redirect('/admin/users');
  }

  await user.destroy();
  req.flash('success', 'Utilisateur supprime.');
  return res.redirect('/admin/users');
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
  editUser,
  updateUser,
  deleteUser,
  listPayments
};
