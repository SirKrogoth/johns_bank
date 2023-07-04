import sequelize, { Model, Optional } from 'sequelize';
import iLifeInsurance from './iLifeInsurance';
import database from 'ms-commons/data/database';

interface iLifeInsuranceCreationAttributes extends Optional<iLifeInsurance, 'lifeInsuranceId'>{}

export interface iLifeInsuranceModel extends Model<iLifeInsurance, iLifeInsuranceCreationAttributes>, iLifeInsurance {}

const lifeInsurance =  database.define<iLifeInsuranceModel>('lifeinsurance', {
    lifeInsuranceId: {
        type: sequelize.STRING(255),
        primaryKey: true,
        allowNull: false
    },
    startVigidity: {
        type: sequelize.DATE,
        allowNull: false
    },
    endVigidity: {
        type: sequelize.DATE,
        allowNull: true
    },
    susepRegister: {
        type: sequelize.INTEGER,
        allowNull: true
    },
    prizeAmount: {
        type: sequelize.DECIMAL,
        allowNull: false
    },
    situation: {
        type: sequelize.CHAR(1),
        allowNull: false,
        defaultValue: true
    }
});

export default lifeInsurance;