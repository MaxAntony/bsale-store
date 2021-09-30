import { Router } from 'express';
import { CategoryControllers } from '../controllers/category.controllers';

const categoryRouter = Router();

categoryRouter.get('/', CategoryControllers.getAll);
categoryRouter.get('/:id', CategoryControllers.getById);

export { categoryRouter };
