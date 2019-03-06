const { LOCATION_EXISTS } = require('../helpers/errors')

module.exports = async address => {
  const location = await db.locations.findOne({
    where: {address},
    raw: true
  })
  if(location) throw LOCATION_EXISTS
}