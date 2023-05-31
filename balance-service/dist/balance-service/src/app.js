"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("ms-commons/api/app"));
const balanceRouter_1 = __importDefault(require("./router/balanceRouter"));
exports.default = (0, app_1.default)(balanceRouter_1.default);
