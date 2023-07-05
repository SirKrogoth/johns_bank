'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('lifeInsurances', {
      lifeInsuranceId: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false,
        primaryKey: true
      },
      startVigidity: { 
        type: Sequelize.DataTypes.DATE,
        allowNull: false
      },
      endVigidity: {
        type: Sequelize.DataTypes.DATE,
        allowNull: true
      },
      susepRegister: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
      },
      prizeAmount: {
        type: Sequelize.DataTypes.DECIMAL(10,2),
        allowNull: false
      },
      situation: {
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

    await queryInterface.createTable('lifeInsuranceCoverage', {
      lifeInsuranceCoverageId: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false,
        primaryKey: true
      },
      description: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
      },
      benefit: {
        type: Sequelize.DataTypes.DECIMAL(10,2),
        allowNull: false,
      },
      lifeInsuranceId: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false,
        references: {
          model: 'lifeInsurances',
          key: 'lifeInsuranceId'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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

    await queryInterface.createTable('accountLifeInsurance', {
      accountId:{
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false,        
        references: {
          model: 'accounts',
          key: 'accountId'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      lifeInsuranceId:{
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false,        
        references: {
          model: 'lifeInsurances',
          key: 'lifeInsuranceId'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false 
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false 
      }      
    },
    {
      primaryKey: ['accountId', 'lifeInsuranceId']
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('lifeInsurances');
    await queryInterface.dropTable('lifeInsuranceCoverage');
    await queryInterface.dropTable('accountLifeInsurance');
  }
};
