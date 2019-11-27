import db from '../database';
import { Request, Response } from 'express';

export async function create(req: Request, res: Response): Promise<Response> {
  let response;
  try {
    response = await db.Question.create(req.body);
    req.body.forEach(async (o: any) => await db.Option.create(o.options));
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