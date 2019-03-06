module.exports = async address => {
  const location = await db.locations.findOne({
    where: { address },
    raw: true
  })
  return location
}
