import { Router } from 'express';
import accountController from '../controllers/accountController';

const router = Router();

//Colocar aqui somente os métodos do tipo POST
router.post('/accounts/', accountController.addAccount);

//Colocar aqui somente os métodos do tipo GET
export default router; 