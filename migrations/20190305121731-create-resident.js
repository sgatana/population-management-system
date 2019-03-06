'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('residents', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        unique: true
      },
      name: Sequelize.STRING,
      gender: Sequelize.STRING,
      subLocationId: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'sub_location_id',
        references: {
          model: 'sub_locations',
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
    return queryInterface.dropTable('residents')
  }
}
