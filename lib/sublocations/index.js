const addSubLocation = require('./addSubLocation')

class SubLocationRepository {
  static addSubLocation(payload) {
    return addSubLocation(payload)
  }
}

module.exports = SubLocationRepository