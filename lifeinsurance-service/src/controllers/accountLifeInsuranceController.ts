import { Request, Response } from 'express';
import iAccountLifeInsurance from '../model/accountLifeInsurance/iAccountLifeInsurance';
import accountLifeInsuranceRepository from '../model/accountLifeInsurance/accountLifeInsuranceRepository';
import { StatusCodes } from 'http-status-codes';

async function cancelLifeInsuranceByAccountId(req: Request, res: Response, next: any){
    try {
        const accountId: string = req.body.accountId;
        const lifeInsuranceId: string = req.body.lifeInsuranceId;
        if(!accountId) return res.status(StatusCodes.BAD_REQUEST).end();
        if(!lifeInsuranceId) return res.status(StatusCodes.BAD_REQUEST).end();
        const teste = accountLifeInsuranceRepository.cancelLifeInsuranceByAccountId(accountId, lifeInsuranceId);
        res.status(StatusCodes.OK).json({
            code: "200",
            description: "Seguro cancelado com sucesso."
        }).end();
    } catch (error) {
        console.error(`cancelLifeInsuranceByAccountId: ${error}`);
        res.status(StatusCodes.BAD_REQUEST).end();
    }
}

export default {
    cancelLifeInsuranceByAccountId
}