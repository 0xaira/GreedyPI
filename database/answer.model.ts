import { Schema, Document, model, models } from 'mongoose'

export interface IAnswer extends Document {
    author: Schema.Types.ObjectId;
    question: Schema.Types.ObjectId;
    content: string;
    upvotes: Schema.Types.ObjectId[];
    downvotes: Schema.Types.ObjectId[];
    createdAt: Date;
  }
const AnswerSchema = new Schema<IAnswer>({})
const Answer = models.Answer || model('Answer', AnswerSchema)

export default Answer
