import { Router } from 'express';
import balanceController from '../controllers/balanceController';

const router = Router();

//Colocar aqui os métodos POST
router.post('/balance/addBalance', balanceController.addBalance);

//Colocar aqui os métodos GET


export default router;