const { LOCATION_NOT_FOUND } = require('../helpers/errors')

module.exports = async locationId => {
  console.log(locationId)
  const location = await db.locations.findById(locationId, {
    include: [{
      model: db.sub_locations,
      as: 'sub_locations',
      attributes: ['name'],
      include: [{
        model: db.residents,
        as: 'residents',
        attributes: ['gender']
      }]
    }]
  })
  if (!location) throw LOCATION_NOT_FOUND
  return location.toJSON()
}
