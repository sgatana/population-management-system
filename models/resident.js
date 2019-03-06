'use strict'
module.exports = (sequelize, DataTypes) => {
  const resident = sequelize.define(
    'residents',
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true
      },
      name: DataTypes.STRING,
      gender: DataTypes.STRING,
      subLocationId: {
        type: DataTypes.STRING,
        unique: true,
        field: 'sub_location_id'
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
      tablename: 'residents'
    }
  )
  return resident
}
