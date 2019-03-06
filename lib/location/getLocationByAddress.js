const { LOCATION_EXISTS } = require('../helpers/errors')

module.exports = async address => {
  const location = await db.locations.findOne({
    address
  })
  if(location) throw LOCATION_EXISTS
}