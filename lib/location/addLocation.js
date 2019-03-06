const pushid = require('pushid')
const getLocationByAddress = require('./getLocationByAddress')

module.exports = async location => {
  await getLocationByAddress(location.address)
  location.id = pushid()
  await db.locations.create(location)
}