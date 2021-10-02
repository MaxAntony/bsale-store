import { Router } from 'express';
import { ProductControllers } from '../controllers/product.controllers';

const ProductRouter = Router();

ProductRouter.get('/', ProductControllers.getAll);
ProductRouter.get('/category/:categoryId', ProductControllers.getByCategory);
ProductRouter.get('/search/:searchText', ProductControllers.search);
ProductRouter.get('/:id', ProductControllers.getById);

export { ProductRouter };
