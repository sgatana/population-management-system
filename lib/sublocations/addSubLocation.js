const pushid = require('pushid')
const getLocationByAddress = require('../locations/getLocationByAddress')
const validateSubLocation = require('../validators/validateSubLocation')

module.exports = async payload => {
  payload.id = pushid()
  console.log(payload)
  const location = await getLocationByAddress(payload.locationAddress)
  payload.locationId = location.id
  await validateSubLocation(payload)
  await db.sub_locations.create(payload)
}