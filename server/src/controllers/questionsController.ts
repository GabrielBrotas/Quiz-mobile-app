import { Request, Response } from 'express';

import GetQuestionsService from '../services/questions/GetQuestionsService';
import CreateQuestionService from '../services/questions/CreateQuestionService';
import DeleteQuestionService from '../services/questions/DeleteQuestionService';

export default class QuestionContrller {

  public async create(request: Request, response: Response): Promise<Response> {
    const {
      question,
      category,
      answers,
      isCorrectAnswers
    } = request.body;

    const answersFormated = answers.map( (answer: string, index: number) => {
      return {
        answer: answers[index],
        isCorrectAnswer: isCorrectAnswers[index]
      }
    });

    const uploadedImage = request.file as Express.Multer.File;
    const image = uploadedImage.filename;

    try {
      const createQuestionService = new CreateQuestionService();
      const newQuestion = await createQuestionService.execute({
        question,
        category,
        answers: answersFormated,
        image
      });

      return response.send(newQuestion);
    } catch (err) {
      console.log(err)
      return response.send(err)
    }
  }

  public async read(request: Request, response: Response): Promise<Response> {
    const { category } = request.params;

    const getQuestionService = new GetQuestionsService();
    const questions = await getQuestionService.execute(category);

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
