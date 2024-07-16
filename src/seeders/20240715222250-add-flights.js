'use strict';
const {Op}= require('sequelize')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('flights',[
      {
      flightName: 'cz230',
      Departure: 'DHK',
      Arrival: 'SYD',
      Date: '2024-07-02',
      createdAt: new Date(),
      updatedAt: new Date()

    },
    {
      flightName: 'Indi45',
      Departure: 'DHK',
      Arrival: 'BLR',
      Date: '2024-08-12',
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      flightName: 'Indi767',
      Departure: 'DEL',
      Arrival: 'BLR',
      Date: '2024-08-07',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  
  ])

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('flights',{[Op.or]:[ {flightName: 'cz230'},{flightName: 'Indi45'}, {flightName: 'Indi767'}]})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
