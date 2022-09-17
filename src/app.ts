import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

import routes from './routes/index.routes';
import error from './middlewares/error.middleware';

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use('/projects', routes.ProjectsRoutes);
app.use(error);

export default app;
