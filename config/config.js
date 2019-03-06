require('dotenv').config()

const development = {
  username: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DEV_DB,
  host: process.env.DB_HOST,
  dialect: 'postgres',
  // logging: false,
}
const test = {
  username: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.TEST_DB,
  host: process.env.DB_HOST,
  dialect: 'postgres',
  logging: false,
}
const production = {
  username: 'root',
  password: null,
  database: 'database_development',
  host: '127.0.0.1',
  dialect: 'mysql',
  logging: false
  
}
module.exports = {
  development,
  test,
  production
}
