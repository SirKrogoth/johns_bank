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
function addBalance(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const balance = req.body;
            balance.balanceId = (0, uuid_1.v4)();
            const result = yield balanceRepository_1.default.add(balance);
            res.status(201).json(result);
        }
        catch (error) {
            console.error('addBalance: ' + error);
            res.status(400).end();
        }
    });
}
exports.default = {
    addBalance
};
