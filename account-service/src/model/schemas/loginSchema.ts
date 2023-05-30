import joi from 'joi';

const loginSchema = joi.object({
    document: joi.string()
                 .required(),
    password: joi.string()
                 .required()
});

export {
    loginSchema
}