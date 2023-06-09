import { Router } from 'express';
import balanceController from '../controllers/balanceController';
import { validateAuthorization, validateAccountPermission } from './middleware/validateAuthorizationMiddleware';
import { valid } from 'joi';

const router = Router();

//Colocar aqui os métodos POST
router.post('/balance/addBalance', validateAuthorization, validateAccountPermission, balanceController.addBalance);
router.post('/balance/findBalanceByAccount', validateAuthorization, validateAccountPermission, balanceController.findBalanceByAccount);
router.post('/balance/findExtractByAccount', validateAuthorization, validateAccountPermission, balanceController.findExtractByAccount);

//Colocar aqui os métodos GET
router.get('/balance/testConection', balanceController.testConection);

export default router;