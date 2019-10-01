import { Router } from 'express';
import InstitutionController from '../app/controllers/InstitutionController';

const routes = new Router();

routes.post('/', InstitutionController.store);

export default routes;
