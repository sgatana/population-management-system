const addSubLocation = require('./addSubLocation')
const addLocation = require('../locations/addLocation')

const { locationPayload, sublocationPayload } = require('../../mockData')
describe('#addSubLocation', () => {
  beforeEach(async () => {
    await addLocation(locationPayload)
  })
  it('should add a sub location', async () => {
    await addSubLocation(sublocationPayload)
    const sublocation = await db.sub_locations.findById(sublocationPayload.id)
   expect(sublocation).toHaveProperty('name', sublocationPayload.name)
   expect(sublocation).toHaveProperty('locationId', locationPayload.id)
  })
})
