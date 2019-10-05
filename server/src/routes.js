import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import InstitutionController from './app/controllers/InstitutionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);
routes.post('/institutions', InstitutionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);
routes.put('/institutions', InstitutionController.update);

export default routes;
