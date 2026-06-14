const { User } = require('../models');

async function requireQuizAccess(req, res, next) {
  if (['free_set_1', 'free_set_2'].includes(req.body.mode)) {
    return next();
  }

  const user = await User.findByPk(req.session.user.id);
  if (user.hasActiveSubscription && user.subscriptionEndDate && new Date(user.subscriptionEndDate) > new Date()) {
    return next();
  }

  req.flash('error', "Cette fonctionnalite est reservee aux abonnes actifs.");
  return res.redirect('/pricing');
}

module.exports = {
  requireQuizAccess
};
