const express = require('express');
const { body } = require('express-validator');
const authController = require('../controllers/authController');
const { requireGuest, requireAuth } = require('../middlewares/authMiddleware');
const { handleValidation } = require('../middlewares/validationMiddleware');

const router = express.Router();

router.get('/register', requireGuest, authController.showRegister);
router.post(
  '/register',
  requireGuest,
  [
    body('firstName').trim().notEmpty().withMessage('Le prenom est requis.'),
    body('lastName').trim().notEmpty().withMessage('Le nom est requis.'),
    body('email').isEmail().withMessage('Email invalide.'),
    body('password').isLength({ min: 6 }).withMessage('Le mot de passe doit contenir au moins 6 caracteres.')
  ],
  handleValidation('auth/register'),
  authController.register
);

router.get('/login', requireGuest, authController.showLogin);
router.post(
  '/login',
  requireGuest,
  [
    body('email').isEmail().withMessage('Email invalide.'),
    body('password').notEmpty().withMessage('Mot de passe requis.')
  ],
  handleValidation('auth/login'),
  authController.login
);

router.post('/logout', requireAuth, authController.logout);
router.get('/logout', requireAuth, authController.logout);

module.exports = router;
