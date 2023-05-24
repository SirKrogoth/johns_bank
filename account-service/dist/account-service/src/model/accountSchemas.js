"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
        .required(),
    gender: joi_1.default.boolean()
        .required(),
    age: joi_1.default.number()
        .required()
        .max(3),
    status: joi_1.default.number()
        .integer()
        .min(100)
        .max(400)
        .required()
});
exports.default = {
    accountSchema
};
