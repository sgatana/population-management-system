const addLocation = require('./addLocation')
const getLocation = require('./getLocation')
const updateLocation = require('./updateLocation')
const deleteLocation = require('./deleteLocation')
const listLocations = require('./listLocations')

class LocationRepository{
  static addLocation(location){
    return addLocation(location)
  }
  static getLocation(locationId){
    return getLocation(locationId)
  }

  static updateLocation(locationId, payload){
    return updateLocation(locationId, payload)
  }
  static deleteLocation(locationId){
    return deleteLocation(locationId)
  }
  static listLocations(){
    return listLocations()
  }
}

module.exports = LocationRepository