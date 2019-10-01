import { Router } from 'express';

import UserRoute from './user';
import SessionRoute from './session';

const routes = new Router();

routes.use('/users', UserRoute);
routes.use('/sessions', SessionRoute);

export default routes;
