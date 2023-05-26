"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validadeSchema(schema, req, res, next) {
    const { error } = schema.validate(req.body);
    if (error == null)
        return next();
    const { details } = error;
    const message = details.map(item => item.message).join(',');
    res.status(400).end(message);
}
exports.default = {
    validadeSchema
};
