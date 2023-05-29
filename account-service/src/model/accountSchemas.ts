import joi from 'joi';

const accountSchema = joi.object({
    accountId: joi.string(),
    firstName: joi.string()
                .min(3)
                .max(255)
                .required(),
    lastName: joi.string()
                .min(3)
                .max(255)
                .required(),
    document: joi.string()
                .min(3)
                .max(20)
                .required(),
    gender: joi.number()
            .max(1)
            .integer()
            .required(),
    age: joi.number()
         .required()
         .max(199),
    status: joi.number()
            .integer()
            .min(100)
            .max(400)
            .required(),
    password: joi.string()
            .min(3)
            .max(20)
            .required()
});

export {
    accountSchema
}