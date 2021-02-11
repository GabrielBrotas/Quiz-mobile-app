import Question, { IQuestion } from '../../schemas/Question';

interface ICreateQuestionServiceDTO {
  question: string;
  category: string;
  answers: [
    {
      answers: string;
      isCorrectAnswer: boolean;
    }
  ]
}

export default class CreateQuestionService {
  async execute({question, category, answers}: ICreateQuestionServiceDTO): Promise<IQuestion> {
    try {
      const newQuestion = await Question.create({
        question,
        category,
        answers,
      });
      return newQuestion;
    } catch (err) {
      console.log(err)
      return err;
    }

  }
}
