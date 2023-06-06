import database from '../../../__commons__/src/data/database';
import sequelize, { Model, Optional } from 'sequelize';
import iBalance from './iBalance';
import accountModel from '../../../account-service/src/model/accountModel';

interface iBalanceCreationAttributes extends Optional<iBalance, "balanceId">{}

export interface iBalanceModel extends Model<iBalance, iBalanceCreationAttributes>, iBalance {}

const balance = database.define<iBalanceModel>('balances', {
    balanceId: {
        type: sequelize.STRING(255),
        primaryKey: true,
        allowNull: false
    },
    originId: {
        type: sequelize.STRING(255),
        allowNull: false
    },
    destinyId: {
        type: sequelize.STRING(255),
        allowNull: false
    },
    balance: {
        type: sequelize.DECIMAL,
        allowNull: false
    },
    type: {
        type: sequelize.SMALLINT,
        allowNull: false
    }
});

balance.belongsTo(accountModel, {
    constraints: true,
    foreignKey: 'accountId'
});

export default balance;