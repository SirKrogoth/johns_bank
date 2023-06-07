"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAccountPermission = exports.validateAuthorization = void 0;
const validateAuthorizationMiddleware_1 = __importDefault(require("ms-commons/api/routers/validateAuthorizationMiddleware"));
function validateAuthorization(req, res, next) {
    return validateAuthorizationMiddleware_1.default.validateAuthorization(req, res, next);
}
exports.validateAuthorization = validateAuthorization;
function validateAccountPermission(req, res, next) {
    return validateAuthorizationMiddleware_1.default.validateAccountPermissionForBalance(req, res, next);
}
exports.validateAccountPermission = validateAccountPermission;
