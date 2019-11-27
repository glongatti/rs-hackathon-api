import { Router } from 'express';
import { AreaService } from '../../service'

export default function createAreaRouter(): Router {
  const app = Router();
  app.post('/', AreaService.create);
  app.get('/:_id', AreaService.findOne);
  return app;
}