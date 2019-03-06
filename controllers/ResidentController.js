const ResidentRepository = require('../lib/residents')

class ResidentController {
  static async addResident(req, res) {
    try {
      const { locationId } = req.params
      const resident = req.body
      await ResidentRepository.addResident(locationId, resident)
      res.status(201).send({
        message: `successfully added ${resident.name}`
      })
    } catch (error) {
      res.status(error.status || 400)
      res.send({
        error: error.message
      })
    }
  }
}

module.exports = ResidentController
