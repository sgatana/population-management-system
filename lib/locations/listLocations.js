const { LOCATION_NOT_FOUND } = require('../helpers/errors')

module.exports = async () => {
  const locations = await db.locations.findAll({
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
  if(!locations.length) throw LOCATION_NOT_FOUND
  return locations
}
