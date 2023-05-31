"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const balanceModel_1 = __importDefault(require("./balanceModel"));
function add(balance) {
    return balanceModel_1.default.create(balance);
}
exports.default = {
    add
};
