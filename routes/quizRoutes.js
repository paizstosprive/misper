const express = require('express');
const { body } = require('express-validator');
const quizController = require('../controllers/quizController');
const { requireAuth } = require('../middlewares/authMiddleware');
const { requireQuizAccess } = require('../middlewares/subscriptionMiddleware');

const router = express.Router();

router.get('/start', requireAuth, quizController.showStart);
router.post(
  '/start',
  requireAuth,
  [body('mode').isIn(['free_set_1', 'free_set_2', 'exam', 'chapter']).withMessage('Mode invalide.')],
  requireQuizAccess,
  quizController.startQuiz
);
router.get('/result/:attemptId', requireAuth, quizController.showResult);
router.get('/:id', requireAuth, quizController.showQuiz);
router.post(
  '/:id',
  requireAuth,
  [body('selectedChoice').isIn(['A', 'B', 'C']).withMessage('Reponse invalide.')],
  quizController.submitAnswer
);

module.exports = router;
