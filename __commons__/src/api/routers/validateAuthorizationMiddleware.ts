import { Request, Response } from 'express';
import authorization from '../../secure/authorization';

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

export default{
    validateAuthorization
}