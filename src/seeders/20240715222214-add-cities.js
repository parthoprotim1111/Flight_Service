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
    await queryInterface.bulkInsert('Cities',[{

      name: 'Dhaka',
      cityCode:'DHK',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  
    {
      name: 'Sydney',
      cityCode:'SYD',
      createdAt: new Date(),
      updatedAt: new Date(),
      
    },
    {
      name: 'Bengaluru',
      cityCode:'BLR',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Mumbai',
      cityCode:'MU',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  
  ])

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Cities',{[Op.or]: [{cityCode:'DHK'}, {cityCode: 'SYD'}, {cityCode:'BLR'}, {cityCode:'MUM'}] })
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
