import Question from '../schemas/Question';
import mongoose from 'mongoose';

export default class DeleteQuestionService {
  async execute(id: string): Promise<void> {
    await Question.deleteOne({
      _id: id
    })

    // mongoose.connection.db.dropDatabase()
    //   .then( res => {
    //     console.log('db deletado')
    //   })
    //   .catch( err => {
    //     console.log('erro')
    //   })
  }
}
