const { SUB_LOCATION_EXISTS } = require('../helpers/errors')

module.exports = async subLocation => {
  const sub_location = await db.sub_locations.findOne({
    where: {
      name: subLocation.name
    },
    raw: true
  })
  if (sub_location) throw SUB_LOCATION_EXISTS
}
