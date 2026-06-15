const express = require('express');
const adminController = require('../controllers/adminController');
const { requireAuth, requireAdmin } = require('../middlewares/authMiddleware');

const router = express.Router();

router.use(requireAuth, requireAdmin);

router.get('/questions', adminController.listQuestions);
router.get('/questions/new', adminController.newQuestion);
router.post('/questions', adminController.createQuestion);
router.get('/questions/:id/edit', adminController.editQuestion);
router.put('/questions/:id', adminController.updateQuestion);
router.delete('/questions/:id', adminController.deleteQuestion);
router.get('/users', adminController.listUsers);
router.get('/users/:id/edit', adminController.editUser);
router.put('/users/:id', adminController.updateUser);
router.delete('/users/:id', adminController.deleteUser);
router.get('/payments', adminController.listPayments);

module.exports = router;
