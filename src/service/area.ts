import db from '../database';
import { Request, Response } from 'express';

export async function create(req: Request, res: Response): Promise<Response> {
  let response;
  try {
    console.log(req.body)
    response = await db.Area.create(req.body);
  } catch (err) {
    return res.sendStatus(500);
  }
  return res.status(201).json(response);
}

export async function findOne(req: Request, res: Response): Promise<Response> {
  let response;
  try {
    response = await db.Area.findById(req.params._id);
  } catch (err) {
    return res.sendStatus(500);
  }
  return res.status(200).json(response);
}