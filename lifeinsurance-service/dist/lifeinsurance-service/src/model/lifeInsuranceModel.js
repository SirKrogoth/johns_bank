"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const database_1 = __importDefault(require("ms-commons/data/database"));
const lifeInsurance = database_1.default.define('lifeinsurance', {
    lifeInsuranceId: {
        type: sequelize_1.default.STRING(255),
        primaryKey: true,
        allowNull: false
    },
    startVigidity: {
        type: sequelize_1.default.DATE,
        allowNull: false
    },
    endVigidity: {
        type: sequelize_1.default.DATE,
        allowNull: true
    },
    susepRegister: {
        type: sequelize_1.default.INTEGER,
        allowNull: true
    },
    prizeAmount: {
        type: sequelize_1.default.DECIMAL,
        allowNull: false
    },
    situation: {
        type: sequelize_1.default.CHAR(1),
        allowNull: false,
        defaultValue: true
    }
});
exports.default = lifeInsurance;
