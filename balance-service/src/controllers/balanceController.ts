import { Request, Response } from 'express';
import iBalance from '../model/iBalance';
import balanceRepository from '../model/balanceRepository';
import { v4 as uuidv4 } from 'uuid';
import { balanceTypes } from '../model/balanceTypes';

async function addBalance(req: Request, res: Response, next: any){
    try {
        const balance = req.body as iBalance;
        const accountId = req.params.accountId;

        if((accountId == balance.destinyId || balance.originId == balance.destinyId) && balance.type == balanceTypes.TRANFER){
            res.status(400).json({
                "message": "O originId e destinyId não podem serem os mesmos.",
                "status": 400
            }).end();
        } else{
            if(balance.type != balanceTypes.WITHDRAW && balance.type != balanceTypes.DEPOSIT && balance.type != balanceTypes.TRANFER){                
                res.status(400).json({
                    "Error": "Deverá ser informado um dos seguintes tipos: W, D ou T.",
                    "Status": 400
                });
                throw new Error("Deverá ser informado um dos seguintes tipos: W, D ou T.");
            }                
            balance.originId = accountId;
            balance.balanceId = uuidv4();
            const result = await balanceRepository.add(balance);
            res.status(201).json(result);
        }        
    } catch (error) {
        console.error('addBalance: ' + error);
        res.status(400).end();
    }
}

async function findBalanceByAccount(req: Request, res: Response, next: any){
    try {
        const accountId = req.params.accountId;
        const result = await balanceRepository.findBalanceByAccount(accountId);
        res.status(200).json(result);
    } catch (error) {
        console.error('findBalanceByAccount: ' + error);
        res.status(400).end();
    }
}

async function findExtractByAccount(req: Request, res: Response, next: any){
    try {
        
        const accountId = req.params.accountId;
        const result = await balanceRepository.findExtractByAccount(accountId);
        console.log(result);
        res.status(200).json(result);

    } catch (error) {
        console.error(`findExtractByAccount: ${error}`);
        res.status(400).end();
    }
}

export default { 
    addBalance,
    findBalanceByAccount,
    findExtractByAccount
}