import { Router } from 'express';
import { QuestionService } from '../../service'

export default function createQuestionRouter(app: Router): Router {
  app.post('/', QuestionService.create);
  app.get('/', QuestionService.findAll);
  return app;
}