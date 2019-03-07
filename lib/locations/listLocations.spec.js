const addLocation = require('../locations/addLocation')
const addSubLocation = require('../sublocations/addSubLocation')

const listLocations = require('./listLocations')
const { locationPayload, sublocationPayload } = require('../../mockData')

describe('#addSubLocation', () => {
  beforeEach(async () => {
    await addLocation(locationPayload)
    await addSubLocation(sublocationPayload)
  })
  it('should add a sub location', async () => {
    const locations = await listLocations()
    expect(locations).toHaveLength(1)
  })
})