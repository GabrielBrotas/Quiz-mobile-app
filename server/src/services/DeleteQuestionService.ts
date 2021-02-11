import Question from '../schemas/Question';

export default class DeleteQuestionService {
  async execute(id: string): Promise<void> {
    await Question.deleteOne({
      _id: id
    })
  }
}
