import { Request, Response } from 'express';
import iBalance from '../model/iBalance';
import balanceRepository from '../model/balanceRepository';
import { v4 as uuidv4 } from 'uuid';

async function addBalance(req: Request, res: Response, next: any){
    try {
        const balance = req.body as iBalance;
        balance.balanceId = uuidv4();
        const result = await balanceRepository.add(balance);
        res.status(201).json(result);
    } catch (error) {
        console.error('addBalance: ' + error);
        res.status(400).end();
    }
}

export default { 
    addBalance
}