'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('accountLifeInsurance','canceledInsurance', {      
      type: Sequelize.DataTypes.DATE,
      allowNull: true
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('accountLifeInsurance', 'canceledInsurance');
  }
};
