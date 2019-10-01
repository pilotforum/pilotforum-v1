import { Router } from 'express';

import UserRoutes from './user';
import SessionRoutes from './session';
import InstitutionRoutes from './institution';

const routes = new Router();

routes.use('/users', UserRoutes);
routes.use('/sessions', SessionRoutes);
routes.use('/institutions', InstitutionRoutes);

export default routes;
