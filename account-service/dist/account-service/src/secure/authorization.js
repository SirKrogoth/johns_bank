"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Verifica se usuário está autorizado a fazer o que deseja fazer
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const fs_1 = __importDefault(require("fs"));
const privateKey = fs_1.default.readFileSync('./keys/private.key', 'utf-8');
const jwtExpires = parseInt(`${process.env.JWT_EXPIRES}`);
const jwtAlgorithm = "RS256";
function sign(accountId) {
    const token = { accountId };
    return jsonwebtoken_1.default.sign(token, privateKey, {
        expiresIn: jwtExpires,
        algorithm: jwtAlgorithm
    });
}
exports.default = {
    sign
};
