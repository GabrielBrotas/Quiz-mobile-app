import Question, { IQuestion } from '../../schemas/Question';
import shuffleArray from '../../utils/shuffleArray';

export default class CreateQuestionService {
  async execute(): Promise<IQuestion[]> {
    const questions = await Question.find();

    questions.map(question => {
      const shuffledAnswers = shuffleArray(question.answers)
      return {question, answers: shuffledAnswers}
    })
    
    return questions;
  }
}
