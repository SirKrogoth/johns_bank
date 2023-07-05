import lifeInsuranceModel from './lifeInsuranceModel';
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

export default {
    findCoverageByAccountId,
    findAllLifeInsurance
}