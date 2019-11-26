import { IQuestion } from "./question.schema";

export interface ICreateQuestion {
  description: IQuestion['description'];
}