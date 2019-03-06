const SubLocationRepository = require('../lib/sublocations')

class SubLocationController{
  static async addSubLocation(req, res){
  try {
    const payload = req.body
    await SubLocationRepository.addSubLocation(payload)
    res.status(201).send({
      message: 'successfully added a sublocation'
    })
  } catch (error) {
    res.status(error.status || 400)
    res.send({
      error: error.message
    })
  }
  }
}

module.exports = SubLocationController