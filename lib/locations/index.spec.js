const deleteLocation = require('./deleteLocation')
const addLocation = require('./addLocation')
const getLocation = require('./getLocation')
const { locationPayload } = require('../../mockData')

describe('#deleteLocation', () => {
  beforeEach(async () => {
    await addLocation(locationPayload)
  })
  it('should delete location', async() => {
    const location = await getLocation(locationPayload.id)
    expect(location).toHaveProperty('name', locationPayload.name)
    await deleteLocation(locationPayload.id)
    expect(location).toMatchObject({})
  })

})
