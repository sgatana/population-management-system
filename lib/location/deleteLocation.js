const getLocation = require('./getLocation')

module.exports = async locationId => {
  const location = await getLocation(locationId)
  await db.locations.destroy({ where: { id: location.id } })
}
