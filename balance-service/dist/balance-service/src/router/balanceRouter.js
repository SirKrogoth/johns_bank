"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const balanceController_1 = __importDefault(require("../controllers/balanceController"));
const router = (0, express_1.Router)();
//Colocar aqui os métodos POST
router.post('/balance/addBalance', balanceController_1.default.addBalance);
//Colocar aqui os métodos GET
exports.default = router;
