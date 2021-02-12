import Question, { IQuestion } from '../../schemas/Question';

interface ICreateQuestionServiceDTO {
  question: string;
  category: string;
  answers: [
    {
      answers: string;
      isCorrectAnswer: boolean;
    }
  ],
  image: string;
}

export default class CreateQuestionService {
  async execute({question, category, answers, image}: ICreateQuestionServiceDTO): Promise<IQuestion> {
    try {
      const newQuestion = await Question.create({
        question,
        category,
        answers,
        image
      });
      return newQuestion;
    } catch (err) {
      console.log(err)
      return err;
    }

  }
}
