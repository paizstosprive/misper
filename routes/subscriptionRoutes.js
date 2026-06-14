const express = require('express');
const subscriptionController = require('../controllers/subscriptionController');
const { requireAuth } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/checkout', requireAuth, subscriptionController.createCheckout);
router.get('/success', requireAuth, subscriptionController.success);
router.get('/cancel', requireAuth, subscriptionController.cancel);

module.exports = router;
