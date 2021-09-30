import { Router } from 'express';
import { ProductControllers } from '../controllers/product.controllers';

const ProductRouter = Router();

ProductRouter.get('/', ProductControllers.getAll);
ProductRouter.get('/:id', ProductControllers.getById);

export { ProductRouter };
