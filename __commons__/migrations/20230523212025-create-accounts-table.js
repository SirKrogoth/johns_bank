'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('accounts', {
      accountID: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        primaryKey: true        
      },
      firstName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      document: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      gender: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false 
      },
      age: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false 
      },
      status: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false 
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false 
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('accounts');
  }
};
