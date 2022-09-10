import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

import routes from './routes/index.routes';

const app = express();

app.use(helmet());
app.use(cors());
app.use('/categories', routes.CategoriesRoutes);

export default app;