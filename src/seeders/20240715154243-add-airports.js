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

    await queryInterface.bulkInsert('Airports',[{
      name: 'Hazrat Sahjalal Int. Airport',
      code:'DHK',
      address:'Dhaka, Bangladesh',
      createdAt: new Date(),
      updatedAt: new Date()


    },{
      name: 'Kempegowda Int. Airport',
      code:'BLR',
      address:'Bengaluru, Karnataka, India',
      createdAt: new Date(),
      updatedAt: new Date()

    },
    {
      name: 'Sydney Airport',
      code:'SYD',
      address:'Sydney, NSW, Australia',
      createdAt: new Date(),
      updatedAt: new Date()

    },
    {
      name: 'Chhatrapati Shivaji International Airport',
      code:'MU',
      address:'Mumbai, Maharashtra 400099, India',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  

  ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Airports',{[Op.or]: [{code:'DHK'}, {code: 'SYD'}, {code:'BLR'}, {code:'MU'}] })
  }
};
