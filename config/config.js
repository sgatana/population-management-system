require('dotenv').config()

const development = {
  username: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DEV_DB,
  host: process.env.DB_HOST,
  dialect: 'postgres'
}
const test = {
  username: 'root',
  password: null,
  database: 'database_development',
  host: '127.0.0.1',
  dialect: 'mysql'
}
const production = {
  username: 'root',
  password: null,
  database: 'database_development',
  host: '127.0.0.1',
  dialect: 'mysql'
}
module.exports = {
  development,
  test,
  production
}
