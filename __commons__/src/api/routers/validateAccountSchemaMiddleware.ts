import { Request, Response } from 'express';
import Joi from 'joi';

function validadeSchema(schema: Joi.ObjectSchema<any>, req: Request, res: Response, next: any){
    const { error } = schema.validate(req.body);

    if(error == null) return next();

    const { details } = error;
    const message = details.map(item => item.message).join(',');

    res.status(400).end(message);
}

export default { 
    validadeSchema
}