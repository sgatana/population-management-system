const formatDate = require('../formatDate')

const getNumberOfresidents = residents => {
  const maleResidents = residents.filter(resident => (resident.gender === 'male'))
  const femaleResidents = residents.filter(
    resident => (resident.gender === 'female')
  )
  
  return {
    totalMaleResidents: maleResidents.length,
    totalFemaleResidents: femaleResidents.length,
    totalResidents: residents.length
  }
}
const formatResidents = sublocations => {
  const allSublocationss = sublocations.map(sublocation => {
    const { residents, name } = sublocation
    const population = getNumberOfresidents(residents)
    return {name, population}
  })
  return allSublocationss
}

const totalPopulation = sublocations => {
  const total = []
  sublocations.map(sublocation => {
    const  {population} = sublocation
    
    return total.push(population.totalResidents)
  })
  return total
}
module.exports = location => {
  const { sub_locations } = location
  location.dateAdded = formatDate(location.createdAt)
  const sublocations = formatResidents(sub_locations)
  location.totalPopulation = totalPopulation(sublocations).reduce((acc, curVal) => acc + curVal)
  location.sublocations = sublocations
  console.log(sublocations.totalResidents)
  delete location.createdAt
  delete location.updatedAt
  delete location.id
  delete location.sub_locations
  return location
}
