import { QueryTypes , Op} from 'sequelize';
import accountLifeInsuranceModel, { iAccountLifeInsuranceModel } from './accountLifeInsuranceModel';
import iAccountLifeInsurance from './iAccountLifeInsurance';

function cancelLifeInsuranceByAccountId(accountId: string, lifeInsuranceId: string){
    const dataAtual = new Date();
    const dia = dataAtual.getDate();
    const mes = dataAtual.getMonth() + 1; // Lembre-se que os meses são baseados em zero (janeiro = 0, fevereiro = 1, etc.).
    const ano = dataAtual.getFullYear();
    const hora = dataAtual.getHours();
    const minuto = dataAtual.getMinutes();
    const hoje = `${ano}/${mes}/${dia} ${hora}:${minuto}`;

    return accountLifeInsuranceModel.sequelize?.query(`
        UPDATE accountlifeinsurances SET canceledInsurance = '${hoje}'
        WHERE accountID = '${accountId}'
        AND lifeInsuranceId = '${lifeInsuranceId}';`, {
        type: QueryTypes.UPDATE
    });
}

function findAllAccountLifeInsuranceByAccountId(accountId: string){
    return accountLifeInsuranceModel.findOne<iAccountLifeInsuranceModel>({
        where: {
            accountId: accountId
        }
    });
}

function findActivedAccountLifeInsuranceByAccountId(accountId: string){
    return accountLifeInsuranceModel.findAll({
        where: {
            accountId: accountId,
            canceledInsurance: null
        }
    });
}

async function contractANewInsuranceByClientID(contract: iAccountLifeInsurance){
    return accountLifeInsuranceModel.create(contract);
}

export default {
    findAllAccountLifeInsuranceByAccountId,
    cancelLifeInsuranceByAccountId,
    contractANewInsuranceByClientID,
    findActivedAccountLifeInsuranceByAccountId
}