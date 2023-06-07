"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../../__commons__/src/data/database"));
const sequelize_1 = __importDefault(require("sequelize"));
const accountModel_1 = __importDefault(require("../../../account-service/src/model/accountModel"));
const balance = database_1.default.define('balances', {
    balanceId: {
        type: sequelize_1.default.STRING(255),
        primaryKey: true,
        allowNull: false
    },
    originId: {
        type: sequelize_1.default.STRING(255),
        allowNull: false
    },
    destinyId: {
        type: sequelize_1.default.STRING(255),
        allowNull: false
    },
    balance: {
        type: sequelize_1.default.DECIMAL,
        allowNull: false
    },
    type: {
        type: sequelize_1.default.SMALLINT,
        allowNull: false
    }
});
balance.belongsTo(accountModel_1.default, {
    constraints: true,
    foreignKey: 'accountId'
});
exports.default = balance;
