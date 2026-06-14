const bcrypt = require('bcrypt');
const { User } = require('../models');

function showRegister(req, res) {
  res.render('auth/register', {
    title: 'Inscription',
    errors: [],
    oldInput: {}
  });
}

async function register(req, res) {
  const { firstName, lastName, email, password } = req.body;
  const passwordHash = await bcrypt.hash(password, 12);

  const user = await User.create({
    firstName,
    lastName,
    email: email.toLowerCase(),
    passwordHash
  });

  req.session.user = {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    role: user.role,
    hasActiveSubscription: user.hasActiveSubscription,
    subscriptionEndDate: user.subscriptionEndDate,
    freeSeriesUsed: user.freeSeriesUsed
  };

  req.flash('success', 'Votre compte a ete cree.');
  res.redirect('/dashboard');
}

function showLogin(req, res) {
  res.render('auth/login', {
    title: 'Connexion',
    errors: [],
    oldInput: {}
  });
}

async function login(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email: email.toLowerCase() } });

  if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
    return res.status(422).render('auth/login', {
      title: 'Connexion',
      errors: [{ msg: 'Identifiants invalides.' }],
      oldInput: { email }
    });
  }

  req.session.user = {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    role: user.role,
    hasActiveSubscription: user.hasActiveSubscription,
    subscriptionEndDate: user.subscriptionEndDate,
    freeSeriesUsed: user.freeSeriesUsed
  };

  req.flash('success', 'Connexion reussie.');
  return res.redirect(user.role === 'admin' ? '/admin' : '/dashboard');
}

function logout(req, res) {
  req.session.destroy(() => {
    res.clearCookie('connect.sid');
    res.redirect('/');
  });
}

module.exports = {
  showRegister,
  register,
  showLogin,
  login,
  logout
};
