"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validadeAccountSchema = void 0;
const validateAccountSchemaMiddleware_1 = __importDefault(require("ms-commons/api/routers/validateAccountSchemaMiddleware"));
const accountSchemas_1 = require("../../model/accountSchemas");
function validadeAccountSchema(req, res, next) {
    return validateAccountSchemaMiddleware_1.default.validadeSchema(accountSchemas_1.accountSchema, req, res, next);
}
exports.validadeAccountSchema = validadeAccountSchema;
