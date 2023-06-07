import { loginSchema } from "../../model/schemas/loginSchema";
import commonsMiddleware from 'ms-commons/api/routers/validateAccountSchemaMiddleware';
import { Request, Response } from 'express';

function validateLoginSchema(req: Request, res: Response, next: any){
    return commonsMiddleware.validadeSchema(loginSchema, req, res, next);
}

export {
    validateLoginSchema
}