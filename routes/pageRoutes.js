const express = require('express');
const pageController = require('../controllers/pageController');
const { requireAuth, requireAdmin } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', pageController.home);
router.get('/pricing', pageController.pricing);
router.get('/chapters', pageController.chapters);
router.get('/chapters/book.pdf', pageController.downloadBookPdf);
router.get('/chapters/:code.pdf', pageController.downloadChapterPdf);
router.get('/chapters/:code', pageController.chapterDetail);
router.get('/dashboard', requireAuth, pageController.dashboard);
router.get('/settings', requireAuth, pageController.settings);
router.post('/settings/profile', requireAuth, pageController.updateProfile);
router.post('/settings/password', requireAuth, pageController.updatePassword);
router.post('/settings/delete-request', requireAuth, pageController.requestAccountDeletion);
router.get('/admin', requireAuth, requireAdmin, pageController.adminDashboard);

module.exports = router;
