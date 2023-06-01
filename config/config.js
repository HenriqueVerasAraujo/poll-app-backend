require('dotenv').config();

module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.DB,
    host: process.env.HOSTNAME,
    port: process.env.DB_PORT,
    dialect: 'mysql'
  },
  test: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.DB,
    host: process.env.HOSTNAME,
    port: process.env.DB_PORT,
    dialect: 'mysql'
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.DB,
    host: process.env.HOSTNAME,
    port: process.env.DB_PORT,
    dialect: 'mysql'
  },
};