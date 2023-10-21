import sequelize, { Model, Optional } from 'sequelize';
import iAccountLifeInsurance from './iAccountLifeInsurance';
import database from 'ms-commons/data/database';
import lifeInsuranceModel from '../lifeInsurance/lifeInsuranceModel';
import accountModel from 'account-service/model/accountModel';

interface iAccountLifeInsuranceAttributes extends Optional<iAccountLifeInsurance, 'id'>{}

export interface iAccountLifeInsuranceModel extends Model<iAccountLifeInsurance, iAccountLifeInsuranceAttributes>, iAccountLifeInsurance {}

const accountlifeinsurance =  database.define<iAccountLifeInsuranceModel>('accountlifeinsurance', {
    accountId: {
        type: sequelize.STRING(255),
        allowNull: false,
        references: {
            model: 'accounts',
            key: 'accountId'
        }
    },
    lifeInsuranceId: {
        type: sequelize.STRING(255),
        allowNull: false,
        references: {
            model: 'lifeinsurances',
            key: 'lifeInsuranceId'
        }
    },
    canceledInsurance: {
        type: sequelize.DATE,
        allowNull: true
    },
    id: {
        type: sequelize.STRING(255),
        primaryKey: true,
        allowNull: false
    }
});

export default accountlifeinsurance;