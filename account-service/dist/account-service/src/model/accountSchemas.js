"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const accountSchema = joi_1.default.object({
    accountId: joi_1.default.string(),
    firstName: joi_1.default.string()
        .min(3)
        .max(255)
        .required(),
    lastName: joi_1.default.string()
        .min(3)
        .max(255)
        .required(),
    document: joi_1.default.string()
        .min(3)
        .max(20)
        .required(),
    gender: joi_1.default.number()
        .max(1)
        .integer()
        .required(),
    age: joi_1.default.number()
        .required()
        .max(199),
    status: joi_1.default.number()
        .integer()
        .min(100)
        .max(400)
        .required(),
    password: joi_1.default.string()
        .min(3)
        .max(20)
        .required()
});
exports.accountSchema = accountSchema;
