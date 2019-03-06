const express = require('express')
const LocationController = require('../../controllers/LocationController')
const SubLocationController = require('../../controllers/SubLocationController')
const ResidentController = require('../../controllers/ResidentController')


const routes = express.Router()

// location endpoints
routes.post('/locations', LocationController.addLocation)
routes.get('/locations', LocationController.listLocations)
routes.get('/locations/:locationId', LocationController.getLocation)
routes.put('/locations/:locationId', LocationController.updateLocation)
routes.delete('/locations/:locationId', LocationController.deleteLocation)

// sub location endpoints
routes.post('/sublocations', SubLocationController.addSubLocation)

// resident endpoints
routes.post('/sublocations/:locationId/residents', ResidentController.addResident)

module.exports = routes
