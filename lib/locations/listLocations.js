const { LOCATION_NOT_FOUND } = require('../helpers/errors')

module.exports = async () => {
  const locations = await db.locations.findAll({ raw: true })
  if(!locations.length) throw LOCATION_NOT_FOUND
  return locations
}
