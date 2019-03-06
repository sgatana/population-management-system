const LocationRepository = require('../lib/location')
const formatGetLocationResponse = require(
  '../lib/adapters/location/formatGetLocationResponse'
  )
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
  static async listLocations(req, res) {
    try {
      const locations = await LocationRepository.listLocations()
      res.status(200).json({
        locations
      })
    } catch (error) {
      res.status(error.status || 400)
      res.send({
        error: error.message
      })
    }
  }
  static async getLocation(req, res) {
    try {
      const { locationId } = req.params
      const location = await LocationRepository.getLocation(locationId)
      const formattedLocation = formatGetLocationResponse(location)
      res.status(200).json({
        location: formattedLocation
      })
    } catch (error) {
      res.status(error.status || 400)
      res.send({
        error: error.message
      })
    }
  }
  static async updateLocation(req, res) {
    try {
      const { locationId } = req.params
      const payload = req.body
      await LocationRepository.updateLocation(locationId, payload)
      res.status(200).json({
        message: 'location details successfully updated'
      })
    } catch (error) {
      res.status(error.status || 400)
      res.send({
        error: error.message
      })
    }
  }
  static async deleteLocation(req, res) {
    try {
      const { locationId } = req.params
      await LocationRepository.deleteLocation(locationId)
      res.status(200).json({
        message: 'location successfully delete'
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
