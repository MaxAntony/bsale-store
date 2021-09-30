import { Router } from 'express';
import { categoryRouter } from './category.routes';
import { ProductRouter } from './product.routes';

const apiRouter = Router();

apiRouter.use('/product', ProductRouter);
apiRouter.use('/category', categoryRouter);

export { apiRouter };
