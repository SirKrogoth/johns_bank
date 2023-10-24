import { Request, Response } from 'express';
import ms_validateAuthorizationMiddleware from 'ms-commons/api/routers/validateAuthorizationMiddleware';

function validateAuthorization(req: Request, res: Response, next: any){
    return ms_validateAuthorizationMiddleware.validateAuthorization(req, res, next);
}

function validateAccountPermission(req: Request, res: Response, next: any){
    return ms_validateAuthorizationMiddleware.validateAccountPermissionForBalance(req, res, next);
}

export {
    validateAuthorization,
    validateAccountPermission
}