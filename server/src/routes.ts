import express from 'express';
const routes = express.Router();

import QuestionsController from './controllers/questionsController';
import CategoriesController from './controllers/categoriesController';

const questionsController = new QuestionsController();
const categoriesController = new CategoriesController();

routes.get('/categories', categoriesController.read);

routes.post('/question', questionsController.create);
routes.get('/questions/:category', questionsController.read);
routes.delete('/question/:id', questionsController.delete);

export default routes
