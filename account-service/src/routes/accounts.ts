import { Router } from 'express';
import accountController from '../controllers/accountController';
import { validadeAccountSchema } from './middlewares/validateAccountSchemaMiddleware';

const router = Router();

//Colocar aqui somente os métodos do tipo POST
router.post('/accounts/', validadeAccountSchema, accountController.addAccount);

//Colocar aqui somente os métodos do tipo GET
export default router; 