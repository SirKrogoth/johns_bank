import { Request, Response } from 'express';
import commonsMiddleware from 'ms-commons/api/routers/validateAccountSchemaMiddleware';
import { accountSchema } from '../../model/accountSchemas';

function validadeAccountSchema(req: Request, res: Response, next: any){
    return commonsMiddleware.validadeSchema(accountSchema, req, res, next);
}

export {
    validadeAccountSchema
}