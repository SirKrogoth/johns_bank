"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("ms-commons/api/app"));
const accounts_1 = __importDefault(require("./routes/accounts"));
exports.default = (0, app_1.default)(accounts_1.default);
