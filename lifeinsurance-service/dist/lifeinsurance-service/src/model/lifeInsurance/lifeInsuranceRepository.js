"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lifeInsuranceModel_1 = __importDefault(require("./lifeInsuranceModel"));
const sequelize_1 = require("sequelize");
function findCoverageByAccountId(accountId) {
    var _a;
    return (_a = lifeInsuranceModel_1.default.sequelize) === null || _a === void 0 ? void 0 : _a.query(`
        SELECT lic.lifeInsuranceCoverageId, lic.lifeInsuranceId, ali.accountId, ali.createdAt, ali.updatedAt, lic.description, lic.benefit 
        FROM accountlifeinsurance as ali
        INNER JOIN lifeinsurancecoverage as lic
        ON ali.lifeInsuranceId = lic.lifeInsuranceId
        WHERE ali.accountId = '${accountId}';`, {
        type: sequelize_1.QueryTypes.SELECT
    });
}
function findAllLifeInsurance() {
    return lifeInsuranceModel_1.default.findAll();
}
function findLifeInsuranceByAccountId(accountId) {
    var _a;
    return (_a = lifeInsuranceModel_1.default.sequelize) === null || _a === void 0 ? void 0 : _a.query(`    
        SELECT li.* FROM lifeinsurances as li
        INNER JOIN accountlifeinsurance as ali ON li.lifeInsuranceId = ali.lifeInsuranceId
        WHERE ali.accountId = '${accountId}';`, {
        type: sequelize_1.QueryTypes.SELECT
    });
}
function createNewInsurance(newInsurance) {
    return lifeInsuranceModel_1.default.create(newInsurance);
}
function findInsuranceEnded() {
    return lifeInsuranceModel_1.default.findAll({
        where: {
            endVigidity: {
                [sequelize_1.Op.not]: null,
            }
        }
    });
}
function findInsuranceActivated() {
    return lifeInsuranceModel_1.default.findAll({
        where: {
            endVigidity: null
        }
    });
}
exports.default = {
    findCoverageByAccountId,
    findAllLifeInsurance,
    findLifeInsuranceByAccountId,
    createNewInsurance,
    findInsuranceEnded,
    findInsuranceActivated
};
