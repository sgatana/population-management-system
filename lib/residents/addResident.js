const pushid = require('pushid')

module.exports = async (sublocationId, resident) => {
  resident.id = pushid()
  resident.subLocationId = sublocationId
  db.residents.create(resident)
}