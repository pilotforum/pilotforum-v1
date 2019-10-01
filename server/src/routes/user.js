import { Router } from 'express';
import UserController from '../app/controllers/UserController';

const routes = new Router();

routes.post('/', UserController.store);
routes.put('/:id', UserController.update);

export default routes;
