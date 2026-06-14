const { CHAPTERS, FREE_SERIES, SUBSCRIPTION_PLANS } = require('../utils/constants');
const { formatDate, eurosFromCents, formatAttemptLabel } = require('../utils/formatters');

function attachLocals(req, res, next) {
  res.locals.currentUser = req.session.user || null;
  res.locals.isAuthenticated = Boolean(req.session.user);
  res.locals.isAdmin = req.session.user?.role === 'admin';
  res.locals.csrfToken = req.csrfToken();
  res.locals.flash = {
    success: req.flash('success'),
    error: req.flash('error')
  };
  res.locals.chapters = CHAPTERS;
  res.locals.freeSeries = FREE_SERIES;
  res.locals.plans = Object.values(SUBSCRIPTION_PLANS);
  res.locals.helpers = {
    formatDate,
    eurosFromCents,
    formatAttemptLabel
  };
  next();
}

module.exports = {
  attachLocals
};
