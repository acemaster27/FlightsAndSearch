'use strict';
// npx sequelize seed:generate --name add-add-airports
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
       await queryInterface.bulkInsert('Airports',[
        {
          name: 'Kempegowda International Airports',
          cityId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Mysuru Airports',
          cityId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Mengaluru International Airports',
          cityId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Indira Gandhi International Airports',
          cityId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
       ],{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
//npx sequelize db:seed:all
// select * from Airports Join Cities on Airports.cityId = Cities.id where Cities.id = 1;