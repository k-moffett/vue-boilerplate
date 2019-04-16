const Sequelize = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(process.env.DATABASE, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
    dialect: 'postgres',
  })

const models = {
  User: sequelize.import('./userModel'),
};

module.exports = models
module.exports =  sequelize 