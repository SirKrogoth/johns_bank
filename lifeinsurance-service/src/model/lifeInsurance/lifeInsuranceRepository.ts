import lifeInsuranceModel, { iLifeInsuranceModel } from './lifeInsuranceModel';
import iLifeInsurance from './iLifeInsurance';
import { QueryTypes } from "sequelize";

function findCoverageByAccountId(accountId: string){
    return lifeInsuranceModel.sequelize?.query(`
        SELECT lic.lifeInsuranceCoverageId, lic.lifeInsuranceId, ali.accountId, ali.createdAt, ali.updatedAt, lic.description, lic.benefit 
        FROM accountlifeinsurance as ali
        INNER JOIN lifeinsurancecoverage as lic
        ON ali.lifeInsuranceId = lic.lifeInsuranceId
        WHERE ali.accountId = '${accountId}';`, {
            type: QueryTypes.SELECT
        });
}

function findAllLifeInsurance(){
    return lifeInsuranceModel.findAll();
}

function findLifeInsuranceByAccountId(accountId: string){
    return lifeInsuranceModel.sequelize?.query(`    
        SELECT li.* FROM lifeinsurances as li
        INNER JOIN accountlifeinsurance as ali ON li.lifeInsuranceId = ali.lifeInsuranceId
        WHERE ali.accountId = '${accountId}';`, {
            type: QueryTypes.SELECT
        });
}

export default {
    findCoverageByAccountId,
    findAllLifeInsurance,
    findLifeInsuranceByAccountId
}