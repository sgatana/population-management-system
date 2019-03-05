'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('resident', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        unique: true
      },
      name: Sequelize.STRING,
      gender: Sequelize.STRING,
      subLocationId: {
        type: Sequelize.STRING,
        unique: true,
        field: 'sub_location_id',
        references: {
          model: 'sub_location',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at'
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('resident')
  }
}
