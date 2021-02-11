import { Request, response, Response } from 'express';

import GetQuestionsService from '../services/GetQuestionService';
import CreateQuestionService from '../services/CreateQuestionService';
import DeleteQuestionService from '../services/DeleteQuestionService';

export default class QuestionContrller {

  public async create(request: Request, response: Response): Promise<Response> {
    const {
      question,
      category,
      answers,
    } = request.body

    try {
      const createQuestionService = new CreateQuestionService();
      const newQuestion = await createQuestionService.execute({question, category, answers});
      return response.send(newQuestion);
    } catch (err) {
      return response.send(err)
    }
  }

  public async read(request: Request, response: Response): Promise<Response> {
    const getQuestionService = new GetQuestionsService();
    const questions = await getQuestionService.execute();
    return response.send(questions)
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      const deleteQuestionService = new DeleteQuestionService();
      await deleteQuestionService.execute(id);
      return response.send()
    } catch (err) {
      return response.send(err)
    }
  }

}
