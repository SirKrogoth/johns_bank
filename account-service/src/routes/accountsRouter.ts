import { Router } from 'express';
import accountController from '../controllers/accountController';
import { validadeAccountSchema } from './middlewares/validateAccountSchemaMiddleware';
import { validateLoginSchema } from './middlewares/validateLoginSchema';
import { validateAuthorization } from './middlewares/validateAuthorizationMiddleware';

const router = Router();

//Colocar aqui somente os métodos do tipo POST
router.post('/accounts/', validadeAccountSchema, accountController.addAccount);
router.post('/accounts/login', validateLoginSchema, accountController.loginAccount);

//Colocar aqui somente os métodos do tipo GET
router.get('/accounts/verifyAuthorization', validateAuthorization, accountController.verifyAuthentication);

export default router;