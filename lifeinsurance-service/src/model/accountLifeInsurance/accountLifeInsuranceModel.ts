import sequelize, { Model, Optional } from 'sequelize';
import iAccountLifeInsurance from './iAccountLifeInsurance';
import database from 'ms-commons/data/database';

interface iAccountLifeInsuranceAttributes extends Optional<iAccountLifeInsurance, 'accountId'>{}

export interface iAccountLifeInsuranceModel extends Model<iAccountLifeInsurance, iAccountLifeInsuranceAttributes>, iAccountLifeInsurance {}

const accountlifeinsurance =  database.define<iAccountLifeInsuranceModel>('accountlifeinsurance', {
    accountId: {
        type: sequelize.STRING(255),
        primaryKey: true,
        allowNull: false
    },
    lifeInsuranceId: {
        type: sequelize.STRING(255),
        primaryKey: true,
        allowNull: false
    },
    canceledInsurance: {
        type: sequelize.DATE,
        allowNull: true
    }
});

export default accountlifeinsurance;