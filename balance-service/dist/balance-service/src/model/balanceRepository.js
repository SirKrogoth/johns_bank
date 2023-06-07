"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const balanceModel_1 = __importDefault(require("./balanceModel"));
const sequelize_1 = require("sequelize");
function add(balance) {
    return balanceModel_1.default.create(balance);
}
function findBalanceByAccount(accountId) {
    var _a;
    return (_a = balanceModel_1.default.sequelize) === null || _a === void 0 ? void 0 : _a.query(`
        SELECT
            IFNULL(((SELECT IFNULL(sum(balance),0) +
                (SELECT IFNULL(sum(balance),0) from balances WHERE type = 'T' 
                AND destinyId = '${accountId}') as transfers 
            FROM balances
            WHERE type = 'D' AND originId = '${accountId}')
            - 
            (SELECT IFNULL(sum(balance), 0)
            FROM balances 
            WHERE type != 'D' AND originId = '${accountId}')), 0) as balance
        FROM balances LIMIT 1;`, {
        type: sequelize_1.QueryTypes.SELECT
    });
}
function findExtractByAccount(accountId) {
    var _a;
    return (_a = balanceModel_1.default.sequelize) === null || _a === void 0 ? void 0 : _a.query(`    
        SELECT * FROM balances
        WHERE (originId = '${accountId}' OR (destinyId = '${accountId}' && type = 'T'))
        ORDER BY createdAt DESC;`, {
        type: sequelize_1.QueryTypes.SELECT
    });
}
exports.default = {
    add,
    findBalanceByAccount,
    findExtractByAccount
};
