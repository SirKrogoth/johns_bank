"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const lifeInsuranceController_1 = __importDefault(require("../controllers/lifeInsuranceController"));
const router = (0, express_1.Router)();
//HTTP POST
router.post('/findCoverageByAccountId', lifeInsuranceController_1.default.findCoverageByAccountId);
//HTTP GET
router.get('/', lifeInsuranceController_1.default.healthCheck);
router.get('/findCoverageByAccountId/:accountId', lifeInsuranceController_1.default.findCoverageByAccountId);
router.get('/findAllLifeInsurance', lifeInsuranceController_1.default.findAllLifeInsurance);
exports.default = router;
