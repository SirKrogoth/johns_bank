"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const accountController_1 = __importDefault(require("../controllers/accountController"));
const validateAccountSchemaMiddleware_1 = require("./middlewares/validateAccountSchemaMiddleware");
const validateLoginSchema_1 = require("./middlewares/validateLoginSchema");
const validateAuthorizationMiddleware_1 = require("./middlewares/validateAuthorizationMiddleware");
const router = (0, express_1.Router)();
//Colocar aqui somente os métodos do tipo POST
router.post('/accounts/', validateAccountSchemaMiddleware_1.validadeAccountSchema, accountController_1.default.addAccount);
router.post('/accounts/login', validateLoginSchema_1.validateLoginSchema, accountController_1.default.loginAccount);
//Colocar aqui somente os métodos do tipo GET
router.get('/accounts/verifyAuthorization', validateAuthorizationMiddleware_1.validateAuthorization, accountController_1.default.verifyAuthentication);
exports.default = router;
