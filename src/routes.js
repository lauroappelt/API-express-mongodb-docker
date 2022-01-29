import Router from 'express';
import CategoryController from './controllers/CategoryController';
const routes = new Router();

routes.post('/categories', CategoryController.store);

export default routes;