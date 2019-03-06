const express = require('express')
const db = require('../models')
const routes = require('./routes')

const app = express()

app.use(express.json())
global.db = db
app.use('/api/v1/', routes)
module.exports = app
