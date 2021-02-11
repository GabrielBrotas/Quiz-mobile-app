import express from 'express';
const routes = express.Router();

import QuestionsController from './controllers/questionsController';
const questionsController = new QuestionsController();

routes.post('/question', questionsController.create);
routes.get('/questions', questionsController.read)
routes.delete('/question/:id', questionsController.delete);

export default routes
