module.exports = {
  LOCATION_NOT_FOUND: {},
  LOCATION_EXISTS: {
    message: 'location with provided address already exists, please use a different address',
    status: 409
  },
  LOCATION_NOT_FOUND: {
    message: 'sorry, location does not exist',
    status: 404
  }
}