const addResident = require('./addResident')

class ResidentRepository{
  static addResident(locationId, resident){
    return addResident(locationId, resident)
  }
}
module.exports = ResidentRepository