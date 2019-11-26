import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name?: string;
  message?: string;
}

const UserSchema = new Schema({
  name: { type: String, required: true },
  message: { type: String, required: true },
});

export default mongoose.model('User', UserSchema);