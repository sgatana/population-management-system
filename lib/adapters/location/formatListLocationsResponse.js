const formatGetLocationResponse = require('./formatGetLocationResponse')

module.exports =  locations => {
  const allLocations = locations.map(location => {
    const formattedLocation = formatGetLocationResponse(location.toJSON())
    return formattedLocation
  })
  return allLocations
}
