import { Schema, Document, Mongoose } from 'mongoose';
import { IArea } from '../area/area.schema';

export interface IOption extends Document {
  description: string;
  area: IArea['_id'] | IArea;
}

const OptionSchema = new Schema({
  description: { type: String, required: true },
  area: { type: Schema.Types.ObjectId, ref: 'Area', required: true },
});

export default (mongoose: Mongoose) => mongoose.model<IOption>('Option', OptionSchema);