"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("ms-commons/data/database"));
const sequelize_1 = __importDefault(require("sequelize"));
exports.default = database_1.default.define('accounts', {
    accountId: {
        type: sequelize_1.default.STRING(255),
        primaryKey: true,
        allowNull: false
    },
    firstName: {
        type: sequelize_1.default.STRING(255),
        allowNull: false
    },
    lastName: {
        type: sequelize_1.default.STRING(255),
        allowNull: false
    },
    document: {
        type: sequelize_1.default.STRING(255),
        allowNull: false
    },
    gender: {
        type: sequelize_1.default.BOOLEAN,
        allowNull: false
    },
    age: {
        type: sequelize_1.default.NUMBER,
        allowNull: false
    },
    status: {
        type: sequelize_1.default.SMALLINT.UNSIGNED,
        allowNull: false
    },
    password: {
        type: sequelize_1.default.STRING(255),
        allowNull: false
    }
});
