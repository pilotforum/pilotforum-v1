import { Router } from 'express';
import UserRoute from './user';
const routes = new Router();

routes.use('/users', UserRoute);

export default routes;
