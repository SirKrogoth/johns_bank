"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLoginSchema = void 0;
const loginSchema_1 = require("../../model/schemas/loginSchema");
const validateAccountSchemaMiddleware_1 = __importDefault(require("ms-commons/api/routers/validateAccountSchemaMiddleware"));
function validateLoginSchema(req, res, next) {
    return validateAccountSchemaMiddleware_1.default.validadeSchema(loginSchema_1.loginSchema, req, res, next);
}
exports.validateLoginSchema = validateLoginSchema;
