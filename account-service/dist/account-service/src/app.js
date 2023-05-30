"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("ms-commons/api/app"));
const accountsRouter_1 = __importDefault(require("./routes/accountsRouter"));
exports.default = (0, app_1.default)(accountsRouter_1.default);
