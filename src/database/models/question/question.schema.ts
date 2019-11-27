import { Schema, Document, Mongoose } from 'mongoose';
import { IOption } from '../option/option.schema';

export interface IQuestion extends Document {
  description: string;
  options: IOption['_id'][] | IOption[];
}

const QuestionSchema = new Schema({
  description: { type: String, required: true },
  options: [{ type: Schema.Types.ObjectId, ref: 'Option' }],
});

export default (mongoose: Mongoose) => mongoose.model<IQuestion>('Question', QuestionSchema);