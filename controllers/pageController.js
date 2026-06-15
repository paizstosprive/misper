const bcrypt = require('bcrypt');
const { User, Question, QuizAttempt, Payment } = require('../models');
const { CHAPTERS, SUBSCRIPTION_PLANS } = require('../utils/constants');
const { studyChapters, getStudyChapter } = require('../utils/chapterStudyContent');
const { generateStudyPdf } = require('../utils/studyPdfGenerator');
const { sendDeletionRequestEmail } = require('../services/emailService');

async function home(req, res) {
  const [questionCount, userCount] = await Promise.all([Question.count(), User.count()]);
  res.render('pages/home', {
    title: 'Accueil',
    stats: { questionCount, userCount, chapterCount: CHAPTERS.length },
    plans: Object.values(SUBSCRIPTION_PLANS)
  });
}

async function dashboard(req, res) {
  const user = await User.findByPk(req.session.user.id);
  const attempts = await QuizAttempt.findAll({
    where: { userId: user.id, status: 'completed' },
    order: [['completedAt', 'DESC']],
    limit: 10
  });

  res.render('pages/dashboard', {
    title: 'Tableau de bord',
    user,
    attempts
  });
}

async function settings(req, res) {
  const user = await User.findByPk(req.session.user.id);
  const payments = await Payment.findAll({
    where: { userId: user.id },
    order: [['createdAt', 'DESC']],
    limit: 10
  });

  res.render('pages/settings', {
    title: 'Parametres',
    user,
    payments,
    errors: [],
    oldInput: {}
  });
}

async function updateProfile(req, res) {
  const user = await User.findByPk(req.session.user.id);
  const firstName = req.body.firstName?.trim();
  const lastName = req.body.lastName?.trim();
  const email = req.body.email?.trim().toLowerCase();

  if (!firstName || !lastName || !email) {
    req.flash('error', 'Tous les champs du profil sont requis.');
    return res.redirect('/settings');
  }

  const existingUser = await User.findOne({ where: { email } });
  if (existingUser && existingUser.id !== user.id) {
    req.flash('error', 'Cette adresse email est deja utilisee.');
    return res.redirect('/settings');
  }

  await user.update({ firstName, lastName, email });
  req.session.user = {
    ...req.session.user,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email
  };

  req.flash('success', 'Profil mis a jour.');
  return res.redirect('/settings');
}

async function updatePassword(req, res) {
  const user = await User.findByPk(req.session.user.id);
  const { currentPassword, newPassword, confirmPassword } = req.body;

  if (!currentPassword || !newPassword || !confirmPassword) {
    req.flash('error', 'Tous les champs du mot de passe sont requis.');
    return res.redirect('/settings');
  }

  if (newPassword.length < 6) {
    req.flash('error', 'Le nouveau mot de passe doit contenir au moins 6 caracteres.');
    return res.redirect('/settings');
  }

  if (newPassword !== confirmPassword) {
    req.flash('error', 'La confirmation du mot de passe ne correspond pas.');
    return res.redirect('/settings');
  }

  if (!(await bcrypt.compare(currentPassword, user.passwordHash))) {
    req.flash('error', 'Mot de passe actuel incorrect.');
    return res.redirect('/settings');
  }

  const passwordHash = await bcrypt.hash(newPassword, 12);
  await user.update({ passwordHash });

  req.flash('success', 'Mot de passe mis a jour.');
  return res.redirect('/settings');
}

async function requestAccountDeletion(req, res) {
  const user = await User.findByPk(req.session.user.id);
  sendDeletionRequestEmail(user);
  req.flash('success', 'Votre demande de suppression a ete enregistree. Un administrateur pourra la traiter.');
  return res.redirect('/settings');
}

function pricing(req, res) {
  res.render('pages/pricing', {
    title: 'Tarifs',
    plans: Object.values(SUBSCRIPTION_PLANS)
  });
}

async function chapters(req, res) {
  const chapterCounts = await Promise.all(
    CHAPTERS.map(async (chapter) => ({
      ...chapter,
      count: await Question.count({ where: { chapterCode: chapter.code } }),
      study: studyChapters[chapter.code]
    }))
  );

  res.render('pages/chapters', {
    title: 'Livre de theorie',
    chapters: chapterCounts
  });
}

async function chapterDetail(req, res) {
  const chapter = CHAPTERS.find((item) => item.code === req.params.code.toUpperCase());
  const study = getStudyChapter(req.params.code.toUpperCase());

  if (!chapter || !study) {
    return res.status(404).render('errors/error', { title: 'Chapitre introuvable', status: 404, message: 'Chapitre introuvable' });
  }

  const questionCount = await Question.count({ where: { chapterCode: chapter.code } });
  const chapterIndex = CHAPTERS.findIndex((item) => item.code === chapter.code);
  const previousChapter = chapterIndex > 0 ? CHAPTERS[chapterIndex - 1] : null;
  const nextChapter = chapterIndex < CHAPTERS.length - 1 ? CHAPTERS[chapterIndex + 1] : null;

  return res.render('pages/chapter-detail', {
    title: `Chapitre ${chapter.code} - Theorie`,
    chapter,
    study,
    questionCount,
    previousChapter,
    nextChapter
  });
}

function downloadChapterPdf(req, res) {
  const chapter = CHAPTERS.find((item) => item.code === req.params.code.toUpperCase());
  const study = getStudyChapter(req.params.code.toUpperCase());

  if (!chapter || !study) {
    return res.status(404).render('errors/error', { title: 'Chapitre introuvable', status: 404, message: 'Chapitre introuvable' });
  }

  const filename = `permis-b-chapitre-${chapter.code}.pdf`;
  const pdf = generateStudyPdf({
    title: `Chapitre ${chapter.code} - ${chapter.title}`,
    chapters: [{ ...chapter, study }]
  });

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
  res.setHeader('Content-Length', pdf.length);
  return res.send(pdf);
}

function downloadBookPdf(req, res) {
  const chapters = CHAPTERS.map((chapter) => ({
    ...chapter,
    study: getStudyChapter(chapter.code)
  })).filter((chapter) => chapter.study);

  const pdf = generateStudyPdf({
    title: 'Livre complet de theorie - Permis B Belgique',
    chapters
  });

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="permis-b-livre-theorie.pdf"');
  res.setHeader('Content-Length', pdf.length);
  return res.send(pdf);
}

async function adminDashboard(req, res) {
  const [users, activeSubscribers, payments, questions, revenue] = await Promise.all([
    User.count(),
    User.count({ where: { hasActiveSubscription: true } }),
    Payment.count(),
    Question.count(),
    Payment.sum('amount', { where: { status: 'paid' } })
  ]);

  res.render('admin/dashboard', {
    title: 'Admin',
    metrics: {
      users,
      activeSubscribers,
      payments,
      questions,
      revenue: revenue || 0
    }
  });
}

module.exports = {
  home,
  dashboard,
  settings,
  updateProfile,
  updatePassword,
  requestAccountDeletion,
  pricing,
  chapters,
  chapterDetail,
  downloadChapterPdf,
  downloadBookPdf,
  adminDashboard
};
