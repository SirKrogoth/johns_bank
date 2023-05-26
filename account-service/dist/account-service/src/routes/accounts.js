"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const accountController_1 = __importDefault(require("../controllers/accountController"));
const validateAccountSchemaMiddleware_1 = require("./middlewares/validateAccountSchemaMiddleware");
const router = (0, express_1.Router)();
//Colocar aqui somente os métodos do tipo POST
router.post('/accounts/', validateAccountSchemaMiddleware_1.validadeAccountSchema, accountController_1.default.addAccount);
//Colocar aqui somente os métodos do tipo GET
exports.default = router;
