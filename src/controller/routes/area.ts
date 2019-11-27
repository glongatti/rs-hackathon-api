import { Router } from 'express';
import { AreaService } from '../../service'

export default function createAreaRouter(app: Router): Router {
  app.post('/', AreaService.create);
  app.get('/:_id', AreaService.findOne);
  return app;
}