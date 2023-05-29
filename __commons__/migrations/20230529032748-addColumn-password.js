'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('accounts', 'password', {
      type: Sequelize.STRING(255),
      allowNull: false
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('accounts', 'password');
  }
};