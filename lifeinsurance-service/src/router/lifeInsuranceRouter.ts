import { Router } from 'express';
import lifeInsuranceController from '../controllers/lifeInsuranceController';
import accountLifeInsuranceController from '../controllers/accountLifeInsuranceController';
import { validateAuthorization, validateAccountPermission } from './middleware/validateAuthorizationMiddleware';

const router = Router();

//HTTP POST
router.post('/findCoverageByAccountId', validateAuthorization, validateAccountPermission, lifeInsuranceController.findCoverageByAccountId);
router.post('/findLifeInsuranceByAccountId', validateAuthorization, validateAccountPermission, lifeInsuranceController.findLifeInsuranceByAccountId);
router.post('/accountLifeInsurance/cancelLifeInsuranceByAccountId', validateAuthorization, validateAccountPermission, accountLifeInsuranceController.cancelLifeInsuranceByAccountId);
router.post('/createNewInsurance', validateAuthorization, validateAccountPermission, lifeInsuranceController.createNewInsurance);
router.post('/contractANewInsuranceByClientID', validateAuthorization, validateAccountPermission, accountLifeInsuranceController.contractANewInsuranceByClientID);

//HTTP GET
router.get('/', lifeInsuranceController.healthCheck);
router.get('/findCoverageByAccountId/:accountId', validateAuthorization, validateAccountPermission, lifeInsuranceController.findCoverageByAccountId);
router.get('/findAllLifeInsurance', validateAuthorization, validateAccountPermission, lifeInsuranceController.findAllLifeInsurance);
router.get('/findInsuranceEnded', validateAuthorization, validateAccountPermission, lifeInsuranceController.findInsuranceEnded);
router.get('/findInsuranceActivated', validateAuthorization, validateAccountPermission, lifeInsuranceController.findInsuranceActivated);

export default router;