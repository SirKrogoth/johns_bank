'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('lifeInsurances','description', {      
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false      
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('lifeInsurances', 'description');
  }
};