const getLocation = require('./getLocation')

module.exports = async (locationId, payload) => {
  const location = await getLocation(locationId)
  await db.locations.update(payload, {
    where: {
      id: location.id
    }
  })
}