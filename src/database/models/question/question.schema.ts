import mongoose, { Schema, Document } from 'mongoose';

export interface IQuestion extends Document {
  description: string;
}

const QuestionSchema = new Schema({
  description: { type: String, required: true },
});

export default mongoose.model<IQuestion>('Question', QuestionSchema);