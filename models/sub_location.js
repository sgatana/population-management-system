'use strict'
module.exports = (sequelize, DataTypes) => {
  const sub_location = sequelize.define(
    'sub_locations',
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true
      },
      locationId: {
        type: DataTypes.STRING,
        field: 'location_id',
        allowNull: false
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
      tablename: 'sub_locations'
    }
  )
  sub_location.associate = function(models) {
    // associations can be defined here
   sub_location.hasMany(models.residents, {
     as: 'residents',
     foreignKey: 'subLocationId'
   })
  }
  return sub_location
}
