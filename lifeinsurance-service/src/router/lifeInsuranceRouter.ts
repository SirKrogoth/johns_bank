import { Router } from 'express';
import lifeInsuranceController from '../controllers/lifeInsuranceController';

const router = Router();

//HTTP POST
router.post('/findCoverageByAccountId', lifeInsuranceController.findCoverageByAccountId);

//HTTP GET
router.get('/', lifeInsuranceController.healthCheck);
router.get('/findCoverageByAccountId/:accountId', lifeInsuranceController.findCoverageByAccountId);
router.get('/findAllLifeInsurance', lifeInsuranceController.findAllLifeInsurance);

export default router;