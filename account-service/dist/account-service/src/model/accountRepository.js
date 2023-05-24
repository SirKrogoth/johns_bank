"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const accountModel_1 = __importDefault(require("./accountModel"));
function add(account) {
    return accountModel_1.default.create(account);
}
exports.default = {
    add
};
