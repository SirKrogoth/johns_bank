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
    return (_a = accountLifeInsuranceModel_1.default.sequelize) === null || _a === void 0 ? void 0 : _a.query(`
        UPDATE accountlifeinsurances SET canceledInsurance = '${hoje}'
        WHERE accountID = '${accountId}'
        AND lifeInsuranceId = '${lifeInsuranceId}';`, {
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
function findActivedAccountLifeInsuranceByAccountId(accountId) {
    return accountLifeInsuranceModel_1.default.findAll({
        where: {
            accountId: accountId,
            canceledInsurance: null
        }
    });
}
function contractANewInsuranceByClientID(contract) {
    return __awaiter(this, void 0, void 0, function* () {
        return accountLifeInsuranceModel_1.default.create(contract);
    });
}
exports.default = {
    findAllAccountLifeInsuranceByAccountId,
    cancelLifeInsuranceByAccountId,
    contractANewInsuranceByClientID,
    findActivedAccountLifeInsuranceByAccountId
};
