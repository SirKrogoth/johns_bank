import { Router } from 'express';
import lifeInsuranceController from '../controllers/lifeInsuranceController';
import accountLifeInsuranceController from '../controllers/accountLifeInsuranceController';

const router = Router();

//HTTP POST
router.post('/findCoverageByAccountId', lifeInsuranceController.findCoverageByAccountId);
router.post('/findLifeInsuranceByAccountId', lifeInsuranceController.findLifeInsuranceByAccountId);
router.post('/accountLifeInsurance/cancelLifeInsuranceByAccountId', accountLifeInsuranceController.cancelLifeInsuranceByAccountId);

//HTTP GET
router.get('/', lifeInsuranceController.healthCheck);
router.get('/findCoverageByAccountId/:accountId', lifeInsuranceController.findCoverageByAccountId);
router.get('/findAllLifeInsurance', lifeInsuranceController.findAllLifeInsurance);

export default router;