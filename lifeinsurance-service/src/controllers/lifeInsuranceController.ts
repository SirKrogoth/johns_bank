import {Request, Response} from 'express';
import iLifeInsurance from '../model/lifeInsurance/iLifeInsurance';
import lifeInsuranceRepository from '../model/lifeInsurance/lifeInsuranceRepository';
import { StatusCodes } from 'http-status-codes';
import { v4 as uuidv4 } from 'uuid';
import iAccountLifeInsurance from 'src/model/accountLifeInsurance/iAccountLifeInsurance';
import accountLifeInsuranceRepository from 'src/model/accountLifeInsurance/accountLifeInsuranceRepository';

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

async function findAllLifeInsurance(req: Request, res: Response, next: any){
    try {        
        const lifeInsurance : iLifeInsurance[] = await lifeInsuranceRepository.findAllLifeInsurance();

        if(lifeInsurance === null || lifeInsurance.length === 0) return res.status(StatusCodes.NOT_FOUND).end();

        return res.status(StatusCodes.OK).json(lifeInsurance);
    } catch (error) {
        console.error(`findAllLifeInsurance: ${error}`);
        res.status(StatusCodes.BAD_REQUEST).end();
    }
}

async function findLifeInsuranceByAccountId(req: Request, res: Response, next: any){
    try {
        const accountId: string = req.body.accountId;

        if(!accountId) return res.status(StatusCodes.BAD_REQUEST).end();

        const result = await lifeInsuranceRepository.findLifeInsuranceByAccountId(accountId);
        
        if(result === null) return res.status(StatusCodes.BAD_REQUEST).end();

        if(result?.length == 0) return res.status(StatusCodes.BAD_REQUEST).json({
            "status": 400,
            "messagem": "Não existe contrato vigente para este accountId."
        }).end();

        res.status(StatusCodes.OK).json(result);
    } catch (error) {
        console.error(`findLifeInsuranceByAccountId: ${error}`);
        res.status(StatusCodes.BAD_REQUEST).end();
    }
}

async function createNewInsurance(req: Request, res: Response, next: any){
    try {
        const newInsurance = req.body as iLifeInsurance;

        newInsurance.lifeInsuranceId = uuidv4();

        if(newInsurance === null) return res.status(StatusCodes.BAD_REQUEST).end();

        const result = await lifeInsuranceRepository.createNewInsurance(newInsurance);

        if(result === null) return res.status(StatusCodes.BAD_REQUEST).end();

        res.status(StatusCodes.CREATED).end();


    } catch (error) {
        console.error(`createNewInsurance: ${error}`);
        res.status(StatusCodes.BAD_REQUEST).end();
    }
}

export default {
    findCoverageByAccountId,
    healthCheck,
    findAllLifeInsurance,
    findLifeInsuranceByAccountId,
    createNewInsurance
}