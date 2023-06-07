import { Request, Response } from 'express';
import authorization from '../../secure/authorization';
import iBalance from '../model/iBalance';

async function validateAuthorization(req: Request, res: Response, next: any){
    try {
        
        const token = req.headers['x-access-token'] as string;
        if(!token) return res.status(400).end();

        const payload = await authorization.verify(token);
        if(!payload) return res.status(401).end();

        res.locals.payload = payload;

        next();

    } catch (error) {
        console.error(`validateAuthorization: ${error}`);
        res.status(400).end();
    }
}


async function validateAccountPermissionForBalance(req: Request, res: Response, next: any){
    try {

        const token = req.headers['x-access-token'] as string;
        const payload = req.body as iBalance;

        const decoded = await authorization.decodedToken(token);

        if(decoded == null)
            throw new Error('Não foi possível identificar o accountId.');

        if(payload.originId != undefined)
        {
            if(decoded?.accountId != payload.originId){
                return res.status(403).json({
                    "message": "Acesso negado para realizar esta transação.",
                    "status": "403"
                });
            }
        }

        req.params.accountId = decoded.accountId;

        next();
        
    } catch (error) {
        console.error(`validateAccountPermissionForBalance: ${error}`);
        res.status(400).end();
    }
}

export default{
    validateAuthorization,
    validateAccountPermissionForBalance
}