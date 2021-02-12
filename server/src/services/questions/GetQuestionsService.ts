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

    const questionsFormated: any = [];

    questions.forEach( question => {
      const shuffledAnswers = shuffleArray(question.answers)
      questionsFormated.push({
        question: question.question,
        category: question.category,
        answers: shuffledAnswers,
        image: `http://10.0.0.102:3333/uploads/${question.image}`
      })
    })

    return questionsFormated;
  }
}
