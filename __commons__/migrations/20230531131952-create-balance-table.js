'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('balances', {

        balanceId: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
          primaryKey: true
        },
        accountId: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
          references: {
            model: 'accounts',
            key: 'accountID'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        balance: {
          type: Sequelize.DataTypes.DECIMAL(10,2),
          allowNull: false
        },
        type: {
          type: Sequelize.DataTypes.CHAR(1),
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

    await queryInterface.dropTable('balance');

  }
};
