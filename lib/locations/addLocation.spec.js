const addLocation = require('./addLocation')

const { locationPayload} = require('../../mockData')

describe("#addLocation", () => {
  beforeEach(async() => {
    await addLocation(locationPayload)
  })
  it('should create location', async () => {
    const location = await db.locations.findById(locationPayload.id)
    expect(location).toHaveProperty('id', locationPayload.id)
    expect(location).toHaveProperty('name', locationPayload.name)
  })
})