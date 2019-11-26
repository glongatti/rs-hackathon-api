export interface ICreateUser extends Document {
  name: string;
  message: string;
}

export interface IUpdateUser extends Document {
  name?: string;
  message?: string;
}