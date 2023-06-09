"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const balanceController_1 = __importDefault(require("../controllers/balanceController"));
const validateAuthorizationMiddleware_1 = require("./middleware/validateAuthorizationMiddleware");
const router = (0, express_1.Router)();
//Colocar aqui os métodos POST
router.post('/balance/addBalance', validateAuthorizationMiddleware_1.validateAuthorization, validateAuthorizationMiddleware_1.validateAccountPermission, balanceController_1.default.addBalance);
router.post('/balance/findBalanceByAccount', validateAuthorizationMiddleware_1.validateAuthorization, validateAuthorizationMiddleware_1.validateAccountPermission, balanceController_1.default.findBalanceByAccount);
router.post('/balance/findExtractByAccount', validateAuthorizationMiddleware_1.validateAuthorization, validateAuthorizationMiddleware_1.validateAccountPermission, balanceController_1.default.findExtractByAccount);
//Colocar aqui os métodos GET
router.get('/balance/testConection', balanceController_1.default.testConection);
exports.default = router;
