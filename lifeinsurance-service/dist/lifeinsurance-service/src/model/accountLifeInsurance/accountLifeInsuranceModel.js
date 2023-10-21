"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const database_1 = __importDefault(require("ms-commons/data/database"));
const accountlifeinsurance = database_1.default.define('accountlifeinsurance', {
    accountId: {
        type: sequelize_1.default.STRING(255),
        allowNull: false,
        references: {
            model: 'accounts',
            key: 'accountId'
        }
    },
    lifeInsuranceId: {
        type: sequelize_1.default.STRING(255),
        allowNull: false,
        references: {
            model: 'lifeinsurances',
            key: 'lifeInsuranceId'
        }
    },
    canceledInsurance: {
        type: sequelize_1.default.DATE,
        allowNull: true
    },
    id: {
        type: sequelize_1.default.STRING(255),
        primaryKey: true,
        allowNull: false
    }
});
exports.default = accountlifeinsurance;
