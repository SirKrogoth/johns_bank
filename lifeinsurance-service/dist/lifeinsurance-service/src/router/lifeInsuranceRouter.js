"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const lifeInsuranceController_1 = __importDefault(require("../controllers/lifeInsuranceController"));
const accountLifeInsuranceController_1 = __importDefault(require("../controllers/accountLifeInsuranceController"));
const validateAuthorizationMiddleware_1 = require("./middleware/validateAuthorizationMiddleware");
const router = (0, express_1.Router)();
//HTTP POST
router.post('/findCoverageByAccountId', validateAuthorizationMiddleware_1.validateAuthorization, validateAuthorizationMiddleware_1.validateAccountPermission, lifeInsuranceController_1.default.findCoverageByAccountId);
router.post('/findLifeInsuranceByAccountId', validateAuthorizationMiddleware_1.validateAuthorization, validateAuthorizationMiddleware_1.validateAccountPermission, lifeInsuranceController_1.default.findLifeInsuranceByAccountId);
router.post('/accountLifeInsurance/cancelLifeInsuranceByAccountId', validateAuthorizationMiddleware_1.validateAuthorization, validateAuthorizationMiddleware_1.validateAccountPermission, accountLifeInsuranceController_1.default.cancelLifeInsuranceByAccountId);
router.post('/createNewInsurance', validateAuthorizationMiddleware_1.validateAuthorization, validateAuthorizationMiddleware_1.validateAccountPermission, lifeInsuranceController_1.default.createNewInsurance);
router.post('/contractANewInsuranceByClientID', validateAuthorizationMiddleware_1.validateAuthorization, validateAuthorizationMiddleware_1.validateAccountPermission, accountLifeInsuranceController_1.default.contractANewInsuranceByClientID);
//HTTP GET
router.get('/', lifeInsuranceController_1.default.healthCheck);
router.get('/findCoverageByAccountId/:accountId', validateAuthorizationMiddleware_1.validateAuthorization, validateAuthorizationMiddleware_1.validateAccountPermission, lifeInsuranceController_1.default.findCoverageByAccountId);
router.get('/findAllLifeInsurance', validateAuthorizationMiddleware_1.validateAuthorization, validateAuthorizationMiddleware_1.validateAccountPermission, lifeInsuranceController_1.default.findAllLifeInsurance);
router.get('/findInsuranceEnded', validateAuthorizationMiddleware_1.validateAuthorization, validateAuthorizationMiddleware_1.validateAccountPermission, lifeInsuranceController_1.default.findInsuranceEnded);
router.get('/findInsuranceActivated', validateAuthorizationMiddleware_1.validateAuthorization, validateAuthorizationMiddleware_1.validateAccountPermission, lifeInsuranceController_1.default.findInsuranceActivated);
exports.default = router;
