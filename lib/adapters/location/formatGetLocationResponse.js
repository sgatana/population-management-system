const formatDate = require('../formatDate')

module.exports = location => {
  location.dateAdded = formatDate(location.createdAt)
  delete location.createdAt
  delete location.updatedAt
  delete location.id
  return location
}