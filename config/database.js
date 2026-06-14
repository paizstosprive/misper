const { Sequelize } = require('sequelize');
const dbConfig = require('./config')[process.env.NODE_ENV || 'development'];

const sequelize = new Sequelize(dbConfig.database || '', dbConfig.username || '', dbConfig.password || '', dbConfig);

module.exports = sequelize;
