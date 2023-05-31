import { Router } from 'express';
import balanceController from '../controllers/balanceController';
import { validateAuthorization } from './middleware/validateAuthorizationMiddleware';
const router = Router();

//Colocar aqui os métodos POST
router.post('/balance/addBalance', validateAuthorization, balanceController.addBalance);

//Colocar aqui os métodos GET


export default router;