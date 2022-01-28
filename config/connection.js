// import the Sequelize constructor from the library
const Sequelize = require('sequelize');
// PREVIOUS CODE const { default: ModelManager } = require('sequelize/dist/lib/model-manager');
require('dotenv').config();

// create connect to our db


// create connection to our database, pass in your MySQL information for usename and password
//  PREVIOUS CODE const sequelize = new Sequelize ('just_tech_news_db', 'username', 'password', {
  const sequelize = new Sequelize (process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
  host: 'localhost',
  dialect: 'mysql', 
  port: 3306
});

module.exports = sequelize;