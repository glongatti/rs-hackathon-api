import { IQuestion } from '../database/models/question/question.schema';
import { Request, Response } from 'express';

export async function create(req: Request, res: Response): Promise<Response> {
  let question: IQuestion = req.body;
  try {
    await question.save();
    return res.status(201).json(question);
  } catch (err) {
    return res.sendStatus(500);
  }
}