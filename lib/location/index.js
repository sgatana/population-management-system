const addLocation = require('./addLocation')

class LocationRepository{
  static addLocation(location){
    return addLocation(location)
  }
}

module.exports = LocationRepository