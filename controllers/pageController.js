const { User, Question, QuizAttempt, Payment } = require('../models');
const { CHAPTERS, SUBSCRIPTION_PLANS } = require('../utils/constants');
const { studyChapters, getStudyChapter } = require('../utils/chapterStudyContent');
const { generateStudyPdf } = require('../utils/studyPdfGenerator');

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
  pricing,
  chapters,
  chapterDetail,
  downloadChapterPdf,
  downloadBookPdf,
  adminDashboard
};
