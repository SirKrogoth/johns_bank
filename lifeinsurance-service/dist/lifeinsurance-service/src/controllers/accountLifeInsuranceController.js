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
const accountLifeInsuranceRepository_1 = __importDefault(require("../model/accountLifeInsurance/accountLifeInsuranceRepository"));
const http_status_codes_1 = require("http-status-codes");
const uuid_1 = require("uuid");
function cancelLifeInsuranceByAccountId(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const accountId = req.body.accountId;
            const lifeInsuranceId = req.body.lifeInsuranceId;
            if (!accountId)
                return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).end();
            if (!lifeInsuranceId)
                return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).end();
            const insurance = yield accountLifeInsuranceRepository_1.default.cancelLifeInsuranceByAccountId(accountId, lifeInsuranceId);
            console.log(insurance);
            res.status(http_status_codes_1.StatusCodes.OK).json({
                code: "200",
                description: "Seguro cancelado com sucesso."
            }).end();
        }
        catch (error) {
            console.error(`cancelLifeInsuranceByAccountId: ${error}`);
            res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).end();
        }
    });
}
function contractANewInsuranceByClientID(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const accountId = req.params.accountId;
            const contract = req.body;
            if (contract === null)
                return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).end();
            contract.accountId = accountId;
            contract.id = (0, uuid_1.v4)();
            const verifyContract = yield accountLifeInsuranceRepository_1.default.findActivedAccountLifeInsuranceByAccountId(accountId);
            if (!verifyContract)
                return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
                    "Message": "Indefinido."
                });
            if (verifyContract.length === 0) {
                yield accountLifeInsuranceRepository_1.default.contractANewInsuranceByClientID(contract);
                res.status(http_status_codes_1.StatusCodes.CREATED).end();
            }
            else {
                res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
                    "Message": "O usuário já possui apólice de seguro contratado."
                });
            }
        }
        catch (error) {
            console.log(`contractANewInsuranceByClient: ${error}`);
            res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).end();
        }
    });
}
exports.default = {
    cancelLifeInsuranceByAccountId,
    contractANewInsuranceByClientID
};
