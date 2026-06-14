require('dotenv').config();

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  development: {
    dialect: 'sqlite',
    storage: process.env.DB_STORAGE || 'database.sqlite',
    logging: false
  },
  test: {
    dialect: 'sqlite',
    storage: ':memory:',
    logging: false
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || 5432),
    dialect: 'postgres',
    logging: false,
    dialectOptions: isProduction
      ? {
          ssl: process.env.DB_SSL === 'true' ? { require: true, rejectUnauthorized: false } : false
        }
      : {}
  }
};
