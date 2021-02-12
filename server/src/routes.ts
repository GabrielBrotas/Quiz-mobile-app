import express from 'express';
import multer from 'multer';
import uploadConfig from './config/upload';

const routes = express.Router();
const upload = multer(uploadConfig);

import QuestionsController from './controllers/questionsController';
import CategoriesController from './controllers/categoriesController';

const questionsController = new QuestionsController();
const categoriesController = new CategoriesController();

routes.get('/categories', categoriesController.read);

routes.post('/question', upload.single('image'), questionsController.create);
routes.get('/questions/:category', questionsController.read);
routes.delete('/question/:id', questionsController.delete);

export default routes
