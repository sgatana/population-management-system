const addLocation = require('./addLocation')
const updateLocation = require('./updateLocation')

const { locationPayload} = require('../../mockData')

describe("#addLocation", () => {
  beforeEach(async() => {
    await addLocation(locationPayload)
  })
  it('should create location', async () => {
    const updatePayload = {
      name: 'Lagos'
    }
    await updateLocation(locationPayload.id, updatePayload)
    const location = await db.locations.findById(locationPayload.id)
    expect(location).toHaveProperty('id', locationPayload.id)
    expect(location).toHaveProperty('name', updatePayload.name)
  })
})