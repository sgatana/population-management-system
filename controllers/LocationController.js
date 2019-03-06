const LocationRepository = require('../lib/location')

class LocationController {
  static async addLocation(req, res) {
    try {
      const location = req.body
      await LocationRepository.addLocation(location)
      res.status(201).json({
        message: `you have successfully added ${location.name}`
      })
    } catch (error) {
      res.status(error.status || 400)
      res.send({
        error: error.message
      })
    }
  }
}

module.exports = LocationController
