import express from 'express';
import cors from 'cors';
import './config';
import './db/connect';
import { apiRouter } from './routes/api';

const app = express();

app.use(cors());
app.use('/api', apiRouter);

app.listen(5000, () => console.log('Server on port 5000'));
