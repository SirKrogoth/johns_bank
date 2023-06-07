"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const accountRepository_1 = __importDefault(require("../model/accountRepository"));
const uuid_1 = require("uuid");
const autentication_1 = __importDefault(require("../secure/autentication"));
const authorization_1 = __importDefault(require("../secure/authorization"));
function verifyAuthentication(req, res, next) {
    return res.status(200).json({
        "Retorno": "Está funcionando a autenticação",
        "StatusCode": "200"
    });
}
function addAccount(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newAccount = req.body;
            newAccount.accountId = (0, uuid_1.v4)();
            newAccount.password = autentication_1.default.hashPassword(newAccount.password);
            const result = yield accountRepository_1.default.add(newAccount);
            result.password = '';
            res.status(201).json(result);
        }
        catch (error) {
            console.error(error);
            res.status(400).end();
        }
    });
}
function loginAccount(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const params = req.body;
            const verifyAccount = yield accountRepository_1.default.findByDocument(params.document);
            if (verifyAccount !== null) {
                const isValid = autentication_1.default.comparePassword(params.password, verifyAccount.password);
                if (isValid) {
                    const token = yield authorization_1.default.sign(verifyAccount.accountId);
                    return res.json({
                        auth: true,
                        token
                    });
                }
            }
            else {
                return res.status(401).end();
            }
        }
        catch (error) {
            res.status(400).end();
        }
    });
}
exports.default = {
    addAccount,
    loginAccount,
    verifyAuthentication
};
