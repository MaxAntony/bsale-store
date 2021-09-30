import express from 'express';

import './config';
import './db/connect';
import { Category, Product } from './db/models';
import { apiRouter } from './routes/api';

const app = express();

app.use('/api', apiRouter);

app.listen(4000, () => console.log('Server on port 80'));
