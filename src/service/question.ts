import db from '../database';
import { Request, Response } from 'express';
import { IOption } from '../database/models/option/option.schema';

export async function create(req: Request, res: Response): Promise<Response> {
  let response;
  try {
    const options: IOption[] = await Promise.all((req.body.options as IOption[]).map(o => { console.log(o); return db.Option.create(o);}));
    response = await db.Question.create({ ...req.body, options });
      } catch (err) {
        console.log(err);
    return res.sendStatus(500);
  }
  return res.status(201).json(response);
}

export async function findAll(req: Request, res: Response): Promise<Response> {
  let response;
  try {
    response = await db.Question.find().populate('options');
  } catch (err) {
    return res.sendStatus(500);
  }
  return res.status(200).json(response);
}