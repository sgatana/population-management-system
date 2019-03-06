const pushid = require('pushid')
const addLocation = require('./addLocation')

const now = Date.now()
const mockLocationData = {
  id: pushid(),
  name: 'Nairobi',
  address: '45666',
  createdAt: now,
  updatedAt: now
}

describe("#addLocation", () => {
  beforeEach(async() => {
    await addLocation(mockLocationData)
  })
  it('should create location', async () => {
    const location = await db.locations.findById(mockLocationData.id)
    expect(location).toHaveProperty('id', mockLocationData.id)
    expect(location).toHaveProperty('name', mockLocationData.name)
  })
})