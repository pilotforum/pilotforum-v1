import { Router } from 'express';
import InstitutionController from '../app/controllers/InstitutionController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/', InstitutionController.store);

export default routes;
