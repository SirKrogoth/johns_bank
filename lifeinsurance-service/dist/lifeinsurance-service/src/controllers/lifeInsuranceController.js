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
const lifeInsuranceRepository_1 = __importDefault(require("../model/lifeInsurance/lifeInsuranceRepository"));
const http_status_codes_1 = require("http-status-codes");
const uuid_1 = require("uuid");
function healthCheck(req, res, next) {
    try {
        res.json({
            "statusCode": 200,
            "estado": "OK"
        }).end();
    }
    catch (error) {
        console.error(`healthCheck: ${error}`);
        res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).end();
    }
}
function findCoverageByAccountId(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const accountId = req.params['accountId'];
            const result = yield lifeInsuranceRepository_1.default.findCoverageByAccountId(accountId);
            if (!result)
                return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).end();
            res.status(http_status_codes_1.StatusCodes.OK).json(result);
        }
        catch (error) {
            console.error(`findCoverageByAccountId: ${error}`);
            res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).end();
        }
    });
}
function findAllLifeInsurance(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const lifeInsurance = yield lifeInsuranceRepository_1.default.findAllLifeInsurance();
            if (lifeInsurance === null || lifeInsurance.length === 0)
                return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).end();
            return res.status(http_status_codes_1.StatusCodes.OK).json(lifeInsurance);
        }
        catch (error) {
            console.error(`findAllLifeInsurance: ${error}`);
            res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).end();
        }
    });
}
function findLifeInsuranceByAccountId(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const accountId = req.body.accountId;
            if (!accountId)
                return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).end();
            const result = yield lifeInsuranceRepository_1.default.findLifeInsuranceByAccountId(accountId);
            if (result === null)
                return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).end();
            if ((result === null || result === void 0 ? void 0 : result.length) == 0)
                return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
                    "status": 400,
                    "messagem": "Não existe contrato vigente para este accountId."
                }).end();
            res.status(http_status_codes_1.StatusCodes.OK).json(result);
        }
        catch (error) {
            console.error(`findLifeInsuranceByAccountId: ${error}`);
            res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).end();
        }
    });
}
function createNewInsurance(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newInsurance = req.body;
            newInsurance.lifeInsuranceId = (0, uuid_1.v4)();
            if (newInsurance === null)
                return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).end();
            const result = yield lifeInsuranceRepository_1.default.createNewInsurance(newInsurance);
            if (result === null)
                return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).end();
            res.status(http_status_codes_1.StatusCodes.CREATED).end();
        }
        catch (error) {
            console.error(`createNewInsurance: ${error}`);
            res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).end();
        }
    });
}
exports.default = {
    findCoverageByAccountId,
    healthCheck,
    findAllLifeInsurance,
    findLifeInsuranceByAccountId,
    createNewInsurance
};
