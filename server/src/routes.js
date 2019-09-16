import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  console.log('Hello World');
});

export default routes;
