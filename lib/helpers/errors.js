module.exports = {
  LOCATION_NOT_FOUND: {},
  LOCATION_EXISTS: {
    message: 'location with provided address already exists, please use a different address',
    status: 409
  },
  SUB_LOCATION_EXISTS: {
    message: 'sub location with provided name already exists',
    status: 409
  },
  LOCATION_NOT_FOUND: {
    message: 'sorry, location does not exist',
    status: 404
  }
}