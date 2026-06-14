require('dotenv').config();

const express = require('express');
const path = require('path');
const session = require('express-session');
const helmet = require('helmet');
const flash = require('connect-flash');
const methodOverride = require('method-override');
const expressLayouts = require('express-ejs-layouts');
const csrf = require('csurf');
const createError = require('http-errors');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const { sequelize } = require('./models');
const { syncSubscriptionStatus } = require('./services/subscriptionService');
const { attachLocals } = require('./middlewares/viewMiddleware');

const pageRoutes = require('./routes/pageRoutes');
const authRoutes = require('./routes/authRoutes');
const quizRoutes = require('./routes/quizRoutes');
const subscriptionRoutes = require('./routes/subscriptionRoutes');
const adminRoutes = require('./routes/adminRoutes');
const webhookRoutes = require('./routes/webhookRoutes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('layout', 'layouts/main');

app.use(
  helmet({
    contentSecurityPolicy: false
  })
);
app.use(expressLayouts);
app.use('/webhooks/stripe', webhookRoutes);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

const sessionStore = new SequelizeStore({
  db: sequelize,
  tableName: 'Sessions'
});

app.use(
  session({
    secret: process.env.SESSION_SECRET || 'unsafe-dev-secret',
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production'
    }
  })
);

app.use(flash());
app.use(syncSubscriptionStatus);
app.use(csrf());
app.use(attachLocals);

app.use('/', pageRoutes);
app.use('/', authRoutes);
app.use('/quiz', quizRoutes);
app.use('/subscription', subscriptionRoutes);
app.use('/admin', adminRoutes);

app.use((req, res, next) => {
  next(createError(404, 'Page introuvable'));
});

app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = status === 500 ? 'Une erreur interne est survenue.' : error.message;
  if (status === 403 && error.code === 'EBADCSRFTOKEN') {
    req.flash('error', 'Votre formulaire a expiré. Veuillez réessayer.');
    return res.redirect('back');
  }

  res.status(status);
  return res.render('errors/error', {
    title: `Erreur ${status}`,
    status,
    message
  });
});

async function start() {
  try {
    await sequelize.authenticate();
    await sessionStore.sync();
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Unable to start application', error);
    process.exit(1);
  }
}

start();
