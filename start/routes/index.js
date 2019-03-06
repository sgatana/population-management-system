const express = require('express')
const LocationController = require('../../controllers/LocationController')

const routes = express.Router()
routes.post('/locations', LocationController.addLocation)
routes.get('/locations', LocationController.listLocations)
routes.get('/locations/:locationId', LocationController.getLocation)
routes.put('/locations/:locationId', LocationController.updateLocation)
routes.delete('/locations/:locationId', LocationController.deleteLocation)



module.exports = routes
