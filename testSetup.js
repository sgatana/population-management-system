const databaseCleaner = require('./databaseCleaner')
const db = require('./models')

global.db = db

afterAll(async() => {
  await databaseCleaner.clean(global.db)
})