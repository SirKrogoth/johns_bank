"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const accountLifeInsuranceModel_1 = __importDefault(require("./accountLifeInsuranceModel"));
function cancelLifeInsuranceByAccountId(accountId, lifeInsuranceId) {
    var _a;
    const dataAtual = new Date();
    const dia = dataAtual.getDate();
    const mes = dataAtual.getMonth() + 1; // Lembre-se que os meses são baseados em zero (janeiro = 0, fevereiro = 1, etc.).
    const ano = dataAtual.getFullYear();
    const hora = dataAtual.getHours();
    const minuto = dataAtual.getMinutes();
    const hoje = `${ano}/${mes}/${dia} ${hora}:${minuto}`;
    console.log(hoje);
    return (_a = accountLifeInsuranceModel_1.default.sequelize) === null || _a === void 0 ? void 0 : _a.query(`
        UPDATE accountlifeinsurance SET canceledInsurance = '${hoje}'
        WHERE accountID = '${accountId}'
        AND lifeInsuranceId = '${lifeInsuranceId}';
    `, {
        type: sequelize_1.QueryTypes.UPDATE
    });
}
function findAllAccountLifeInsuranceByAccountId(accountId) {
    return accountLifeInsuranceModel_1.default.findOne({
        where: {
            accountId: accountId
        }
    });
}
exports.default = {
    findAllAccountLifeInsuranceByAccountId,
    cancelLifeInsuranceByAccountId
};
