import User, { IUser } from '../models/user';

export default class UserRepository {
  public static async create(user: IUser) {
    let response = null;
    try {
      response = await user.save();
    } catch (err) {
      console.error(err);
    }
    return response;
  }

  public static async findOne(options: any) {
    let response = null;
    try {
      response = await User.findOne(options);
    } catch (err) {
      console.error(err);
    }
    return response;
  }

  public static async findAll(options: any) {
    let response = null;
    try {
      response = await User.find(options);
    } catch (err) {
      console.error(err);
    }
    return response;
  }
}