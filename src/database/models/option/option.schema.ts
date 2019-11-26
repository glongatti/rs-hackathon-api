import mongoose, { Schema, Document } from 'mongoose';
import { IArea } from '../area/area.schema';
import { IQuestion } from '../question/question.schema';

export interface IOption extends Document {
  description: string;
  area: IArea['_id'] | IArea;
  question: IQuestion['_id'] | IQuestion;
}

const OptionSchema = new Schema({
  description: { type: String, required: true },
  area: { type: Schema.Types.ObjectId, required: true },
  question: { type: Schema.Types.ObjectId, required: true },
});

export default mongoose.model<IOption>('Option', OptionSchema);