import Question, { IQuestion } from '../../schemas/Question';
import shuffleArray from '../../utils/shuffleArray';

export default class GetQuestionService {
  async execute(category: string): Promise<IQuestion[]> {
    let questions: IQuestion[] = [];

    if (category) {
      questions = await Question.find({
        category
      });
    } else {
      questions = await Question.find();
    }

    questions.map(question => {
      const shuffledAnswers = shuffleArray(question.answers)
      return {question, answers: shuffledAnswers}
    })

    return questions;
  }
}
