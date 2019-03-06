const pushid = require('pushid')
const getLocationByAddress = require('./getLocationByAddress')
const { LOCATION_EXISTS } = require('../helpers/errors')

module.exports = async location => {
  const existingLocation = await getLocationByAddress(location.address)
  if (existingLocation) throw LOCATION_EXISTS
  location.id = pushid()
  await db.locations.create(location)
}
