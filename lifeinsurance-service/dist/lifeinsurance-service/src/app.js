"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("ms-commons/api/app"));
const lifeInsuranceRouter_1 = __importDefault(require("./router/lifeInsuranceRouter"));
exports.default = (0, app_1.default)(lifeInsuranceRouter_1.default);
