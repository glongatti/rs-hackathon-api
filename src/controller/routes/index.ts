import { Router } from 'express';
import createQuestionRouter from './question';
import createAreaRouter from './area';

export default function createRouter(app: Router): Router {
  app.use('/question', createQuestionRouter(app));
  app.use('/area', createAreaRouter(app));
  return app;
}