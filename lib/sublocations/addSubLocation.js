const pushid = require('pushid')
const getLocationByAddress = require('../locations/getLocationByAddress')
const validateSubLocation = require('../validators/validateSubLocation')
const { LOCATION_NOT_FOUND } = require('../helpers/errors')

module.exports = async payload => {
  payload.id = pushid()
  console.log(payload)
  const location = await getLocationByAddress(payload.locationAddress)
  if (!location) throw LOCATION_NOT_FOUND
  payload.locationId = location.id
  await validateSubLocation(payload)
  await db.sub_locations.create(payload)
}
