'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('accountlifeinsurance','id', {      
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('accountlifeinsurance', 'id');
  }
};