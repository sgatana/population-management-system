const express = require('express')
const LocationController = require('../../controllers/LocationController')

const routes = express.Router()
routes.post('/location', LocationController.addLocation)

module.exports = routes