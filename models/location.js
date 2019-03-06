module.exports = (sequelize, DataTypes) => {
  const location = sequelize.define(
    'locations',
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true
      },
      name: DataTypes.STRING,
      address: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'updated_at'
      }
    },
    {
      tablename: 'locations'
    }
  )
  location.associate = function(models) {
    // associations can be defined here
    location.hasMany(models.sub_locations, {
      as: 'sub_locations',
      foreignKey: 'locationId'
    })
  }
  return location
}
