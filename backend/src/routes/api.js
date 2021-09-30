import { Router } from 'express';
import { ProductRouter } from './product.routes';

const apiRouter = Router();

apiRouter.use('/product', ProductRouter);

export { apiRouter };
