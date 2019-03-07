const pushid = require('pushid')
const now = Date.now()

module.exports = {
  locationPayload: {
    id: pushid(),
    name: 'Nairobi',
    address: '45666',
    createdAt: now,
    updatedAt: now
  },
  sublocationPayload: {
    id: pushid(),
    name: 'westlands',
    locationAddress: '45666',
    createdAt: now,
    updatedAt: now
  },

}