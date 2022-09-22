import express, { Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';

import routes from './routes/index.routes';
import HttpStatus from './helpers/httpStatus';
import error from './middlewares/error.middleware';

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());

app.get('/', (_req: Request, res: Response) => {
  return res.status(HttpStatus.OK).send('OK!');
}); //root route for health check

app.use('/projects', routes.ProjectsRoutes);
app.use('/categories', routes.CategoriesRoutes);
app.use(error);

export default app;
