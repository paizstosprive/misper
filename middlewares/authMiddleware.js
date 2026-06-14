function requireAuth(req, res, next) {
  if (!req.session.user) {
    req.flash('error', 'Veuillez vous connecter pour continuer.');
    return res.redirect('/login');
  }

  return next();
}

function requireGuest(req, res, next) {
  if (req.session.user) {
    return res.redirect('/dashboard');
  }

  return next();
}

function requireAdmin(req, res, next) {
  if (!req.session.user || req.session.user.role !== 'admin') {
    req.flash('error', 'Acces reserve aux administrateurs.');
    return res.redirect('/dashboard');
  }

  return next();
}

module.exports = {
  requireAuth,
  requireGuest,
  requireAdmin
};
