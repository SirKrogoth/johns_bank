import {Request, Response} from 'express';
import iLifeInsurance from '../model/iLifeInsurance';
import lifeInsuranceRepository from '../model/lifeInsuranceRepository';
import { StatusCodes } from 'http-status-codes';

function healthCheck(req: Request, res: Response, next: any){
    try {
        res.json({
            "statusCode": 200, 
            "estado": "OK"
        }).end();
    } catch (error) {
        console.error(`healthCheck: ${error}`);
        res.status(StatusCodes.BAD_REQUEST).end();
    }
}

async function findCoverageByAccountId(req: Request, res: Response, next: any){
    try {
        const accountId = req.params['accountId'];    
        const result = await lifeInsuranceRepository.findCoverageByAccountId(accountId);
        if(!result) return res.status(StatusCodes.NOT_FOUND).end();
        res.status(StatusCodes.OK).json(result);
    } catch (error) {
        console.error(`findCoverageByAccountId: ${error}`);
        res.status(StatusCodes.BAD_REQUEST).end();
    }
}

export default {
    findCoverageByAccountId,
    healthCheck
}