import mongoose, { Schema, Document } from 'mongoose';

export interface IQuestionAnswer {
  answer: string;
  isCorrectAnswer: boolean;
}

export interface IQuestion extends Document {
  question: string;
  category: string;
  answers: IQuestionAnswer[];
}

const QuestionSchema = new Schema({
  question: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  answers: [
    {
      answer: {
        type: String,
        required: true
      },
      isCorrectAnswer: {
        type: Boolean,
        required: true
      }
    }
  ],
  image: {
    type: String,
    required: true
  }
})

export default mongoose.model<IQuestion>("Question", QuestionSchema)
