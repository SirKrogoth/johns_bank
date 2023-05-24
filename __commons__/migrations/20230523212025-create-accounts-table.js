'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
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
        type: Sequelize.DataTypes.BOOLEAN
      },
      age: {
        type: Sequelize.DataTypes.INTEGER
      }
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('accounts');
  }
};
