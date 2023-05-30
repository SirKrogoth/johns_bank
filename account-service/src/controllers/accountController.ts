import { Request, Response } from 'express';
import iAccount from '../model/iAccount';
import accountRepository from '../model/accountRepository';
import { v4 as uuidv4 } from 'uuid';
import autentication from '../secure/autentication';
import ms_authorization from 'ms-commons/secure/authorization';
import authorization from 'src/secure/authorization';

function verifyAuthentication(req: Request, res: Response, next: any){
    return res.status(200).json({
        "Retorno": "Está funcionando a autenticação",
        "StatusCode": "200"
    })
}

async function addAccount(req: Request, res: Response, next: any){
    try {
        const newAccount = req.body as iAccount;
        newAccount.accountId = uuidv4();
        newAccount.password = autentication.hashPassword(newAccount.password);
        const result = await accountRepository.add(newAccount);
        result.password = '';
        
        res.status(201).json(result);
    } catch (error) {
        console.error(error);
        res.status(400).end();
    }
}

async function loginAccount(req: Request, res: Response, next: any){
    try {
        const params = req.body as iAccount;        
        const verifyAccount = await accountRepository.findByDocument(params.document);

        if(verifyAccount !== null){
            const isValid = autentication.comparePassword(params.password, verifyAccount.password);

            if(isValid){
                const token = await authorization.sign(verifyAccount.accountId!);

                return res.json({
                    auth: true,
                    token
                });
            }
        } else {
            return res.status(401).end();
        }
    } catch (error) {
        res.status(400).end();
    }
}

export default {
    addAccount,
    loginAccount,
    verifyAuthentication
}