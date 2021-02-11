import Question, { IQuestion } from '../../schemas/Question';

export default class CreateQuestionService {
  async execute(): Promise<IQuestion[]> {
    const questions = await Question.find();
    return questions;
  }
}
