'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addConstraint('flights', {
      type: 'foreign key',
      name: 'flight_fkey_constraint',
      fields: ['flightName'],
      references:{
        table: 'Airplanes',
        field: 'airplaneNo'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
      
    })

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.removeConstraint('flights', 'flight_fkey_constraint')

    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
