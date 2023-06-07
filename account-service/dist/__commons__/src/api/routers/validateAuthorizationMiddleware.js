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
const authorization_1 = __importDefault(require("../../secure/authorization"));
function validateAuthorization(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const token = req.headers['x-access-token'];
            if (!token)
                return res.status(400).end();
            const payload = yield authorization_1.default.verify(token);
            if (!payload)
                return res.status(401).end();
            res.locals.payload = payload;
            next();
        }
        catch (error) {
            console.error(`validateAuthorization: ${error}`);
            res.status(400).end();
        }
    });
}
function validateAccountPermissionForBalance(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const token = req.headers['x-access-token'];
            const payload = req.body;
            const decoded = yield authorization_1.default.decodedToken(token);
            if (decoded == null)
                throw new Error('Não foi possível identificar o accountId.');
            if (payload.originId != undefined) {
                if ((decoded === null || decoded === void 0 ? void 0 : decoded.accountId) != payload.originId) {
                    return res.status(403).json({
                        "message": "Acesso negado para realizar esta transação.",
                        "status": "403"
                    });
                }
            }
            req.params.accountId = decoded.accountId;
            next();
        }
        catch (error) {
            console.error(`validateAccountPermissionForBalance: ${error}`);
            res.status(400).end();
        }
    });
}
exports.default = {
    validateAuthorization,
    validateAccountPermissionForBalance
};
