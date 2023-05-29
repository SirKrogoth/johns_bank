import { Request, Response } from 'express';
import iAccount from '../model/iAccount';
import accountRepository from '../model/accountRepository';
import { v4 as uuidv4 } from 'uuid';

async function addAccount(req: Request, res: Response, next: any){
    try {
        const newAccount = req.body as iAccount;
        newAccount.accountId = uuidv4();
        const result = await accountRepository.add(newAccount);
        result.password = '';
        
        res.status(201).json(result);
    } catch (error) {
        console.error(error);
        res.status(400).end();
    }
}

export default {
    addAccount
}