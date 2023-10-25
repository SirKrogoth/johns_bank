import { Request, Response } from 'express';
import iAccountLifeInsurance from '../model/accountLifeInsurance/iAccountLifeInsurance';
import accountLifeInsuranceRepository from '../model/accountLifeInsurance/accountLifeInsuranceRepository';
import { StatusCodes } from 'http-status-codes';
import { v4 as uuidv4 } from 'uuid';
import { object } from 'joi';

async function cancelLifeInsuranceByAccountId(req: Request, res: Response, next: any){
    try {
        const accountId: string = req.body.accountId;
        const lifeInsuranceId: string = req.body.lifeInsuranceId;
        if(!accountId) return res.status(StatusCodes.BAD_REQUEST).end();
        if(!lifeInsuranceId) return res.status(StatusCodes.BAD_REQUEST).end();
        
        const insurance = await accountLifeInsuranceRepository.cancelLifeInsuranceByAccountId(accountId, lifeInsuranceId);

        console.log(insurance);

        res.status(StatusCodes.OK).json({
            code: "200",
            description: "Seguro cancelado com sucesso."
        }).end();
    } catch (error) {
        console.error(`cancelLifeInsuranceByAccountId: ${error}`);
        res.status(StatusCodes.BAD_REQUEST).end();
    }
}

async function contractANewInsuranceByClientID(req: Request, res: Response, next: any){
    try {
        const accountId = req.params.accountId;
        const contract = req.body as iAccountLifeInsurance;

        if(contract === null) return res.status(StatusCodes.BAD_REQUEST).end();

        contract.accountId = accountId;    
        contract.id = uuidv4(); 

        const verifyContract  = await accountLifeInsuranceRepository.findActivedAccountLifeInsuranceByAccountId(accountId);

        if(!verifyContract) return res.status(StatusCodes.BAD_REQUEST).json({
            "Message": "Indefinido."
        });

        if(verifyContract.length === 0){
            await accountLifeInsuranceRepository.contractANewInsuranceByClientID(contract);
            res.status(StatusCodes.CREATED).end();
        }
        else{
            res.status(StatusCodes.BAD_REQUEST).json({
                "Message": "O usuário já possui apólice de seguro contratado."
            });
        }
        
    } catch (error) {
        console.log(`contractANewInsuranceByClient: ${error}`);
        res.status(StatusCodes.BAD_REQUEST).end();
    }
}

export default {
    cancelLifeInsuranceByAccountId,
    contractANewInsuranceByClientID
}