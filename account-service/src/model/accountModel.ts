import database from 'ms-commons/data/database';
import sequelize, { Model, Optional } from 'sequelize';
import iAccount from './iAccount';

interface iAccountCreationAttributes extends Optional<iAccount, "accountId">{}

export interface iAccountModel extends Model<iAccount, iAccountCreationAttributes>, iAccount {}

export default database.define<iAccountModel>('accounts', {
    accountId: {
        type: sequelize.STRING(255),
        primaryKey: true,
        allowNull: false
    },
    firstName: {
        type: sequelize.STRING(255),
        allowNull: false
    },
    lastName: {
        type: sequelize.STRING(255),
        allowNull: false
    }, 
    document: {
        type: sequelize.STRING(255),
        allowNull: false
    },
    gender: {
        type: sequelize.BOOLEAN,
        allowNull: false
    },
    age: {
        type: sequelize.NUMBER,
        allowNull: false
    },
    status: {
        type: sequelize.SMALLINT.UNSIGNED,
        allowNull: false
    },
    password: {
        type: sequelize.STRING(255),
        allowNull: false
    }

});