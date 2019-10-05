import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import InstitutionController from './app/controllers/InstitutionController';
import CourseController from './app/controllers/CourseController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);
routes.post('/institutions', InstitutionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);
routes.put('/institutions', InstitutionController.update);

routes.get('/courses', CourseController.index);
routes.get('/courses/:id', CourseController.show);
routes.post('/courses', CourseController.store);
routes.put('/courses/:id', CourseController.update);
routes.delete('/courses/:id', CourseController.destroy);

export default routes;
