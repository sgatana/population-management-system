'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('sub_location', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        unique: true
      },
      locationId: {
        type: Sequelize.STRING,
        field: 'location_id',
        references: {
          model: 'location',
          key: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      name: Sequelize.STRING,
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
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('sub_location');
  }
};