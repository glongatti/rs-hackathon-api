import mongoose, { Schema, Document } from 'mongoose';

export interface IArea extends Document {
  name: string;
  description: string;
}

const AreaSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

export default mongoose.model<IArea>('Area', AreaSchema);