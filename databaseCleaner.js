module.exports = {
  clean: async db => {
    try {
      const models = Object.keys(db).filter(
        model => !['Sequelize', 'sequelize'].includes(model),
      )
      await db.sequelize.query(`TRUNCATE TABLE ${models.join(', ')}`)
    } catch (error) {
      throw new Error(error)
    }
  },
}