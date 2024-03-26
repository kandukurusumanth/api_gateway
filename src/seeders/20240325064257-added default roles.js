'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const data = [{name:'customer',createdAt: new Date(), updatedAt: new Date()},{name:'company',createdAt: new Date(), updatedAt: new Date()},{name:'owner',createdAt: new Date(), updatedAt: new Date()},{name:'admin',createdAt: new Date(), updatedAt: new Date()}];
    await queryInterface.bulkInsert('Roles',data)
   
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Roles');
  }
};
