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
    
    await queryInterface.addConstraint('Airports', {
      type: 'foreign key',
      name: 'city_fkey_constraint',
      fields: ['code'],
      references:{
        table: 'Cities',
        field: 'cityCode'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
      
    })


  },

  async down (queryInterface, Sequelize) {


    await queryInterface.removeConstraint('Airports', 'city_fkey_constraint')


    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
