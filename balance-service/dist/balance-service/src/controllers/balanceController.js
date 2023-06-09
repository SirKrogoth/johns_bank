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
const balanceRepository_1 = __importDefault(require("../model/balanceRepository"));
const uuid_1 = require("uuid");
const balanceTypes_1 = require("../model/balanceTypes");
function addBalance(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const balance = req.body;
            const accountId = req.params.accountId;
            if ((accountId == balance.destinyId || balance.originId == balance.destinyId) && balance.type == balanceTypes_1.balanceTypes.TRANFER) {
                res.status(400).json({
                    "message": "O originId e destinyId não podem serem os mesmos.",
                    "status": 400
                }).end();
            }
            else {
                if (balance.type != balanceTypes_1.balanceTypes.WITHDRAW && balance.type != balanceTypes_1.balanceTypes.DEPOSIT && balance.type != balanceTypes_1.balanceTypes.TRANFER) {
                    res.status(400).json({
                        "Error": "Deverá ser informado um dos seguintes tipos: W, D ou T.",
                        "Status": 400
                    });
                    throw new Error("Deverá ser informado um dos seguintes tipos: W, D ou T.");
                }
                balance.originId = accountId;
                balance.balanceId = (0, uuid_1.v4)();
                const result = yield balanceRepository_1.default.add(balance);
                res.status(201).json(result);
            }
        }
        catch (error) {
            console.error('addBalance: ' + error);
            res.status(400).end();
        }
    });
}
function findBalanceByAccount(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const accountId = req.params.accountId;
            const result = yield balanceRepository_1.default.findBalanceByAccount(accountId);
            res.status(200).json(result);
        }
        catch (error) {
            console.error('findBalanceByAccount: ' + error);
            res.status(400).end();
        }
    });
}
function findExtractByAccount(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const accountId = req.params.accountId;
            const result = yield balanceRepository_1.default.findExtractByAccount(accountId);
            res.status(200).json(result);
        }
        catch (error) {
            console.error(`findExtractByAccount: ${error}`);
            res.status(400).end();
        }
    });
}
function testConection(req, res, next) {
    try {
        res.status(200).json({
            "api": "balance-service",
            "status": 200
        }).end();
    }
    catch (error) {
        console.error(`testConection: ${error}`);
        res.status(400).end();
    }
}
exports.default = {
    addBalance,
    findBalanceByAccount,
    findExtractByAccount,
    testConection
};
