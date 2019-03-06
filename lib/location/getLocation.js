const { LOCATION_NOT_FOUND } = require('../helpers/errors')

module.exports = async locationId => {
  console.log(locationId)
  const location = await db.locations.findById(locationId, { raw: true })
  if (!location) throw LOCATION_NOT_FOUND
  return location
}
