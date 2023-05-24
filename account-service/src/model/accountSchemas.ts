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
                .required(),
    gender: joi.boolean()
            .required(),
    age: joi.number()
         .required()
         .max(3),
    status: joi.number()
            .integer()
            .min(100)
            .max(400)
            .required()
});

export default {
    accountSchema
}