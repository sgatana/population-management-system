'use strict'
module.exports = (sequelize, DataTypes) => {
  const location = sequelize.define(
    'location',
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true
      },
      name: DataTypes.STRING,
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
      tablename: 'location'
    }
  )
  location.associate = function(models) {
    // associations can be defined here
    location.hasMany(models.sub_location, {
      as: 'sub_locations',
      foreignKey: 'locationId'
    })
  }
  return location
}
