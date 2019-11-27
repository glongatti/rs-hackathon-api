import { Router } from 'express';
import { QuestionService } from '../../service'

export default function createQuestionRouter(): Router {
  const app = Router();
  app.post('/', QuestionService.create);
  app.get('/', QuestionService.findAll);
  return app;
}