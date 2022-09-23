import express, { Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc, { Options } from 'swagger-jsdoc';

import routes from './routes/index.routes';
import HttpStatus from './helpers/httpStatus';
import error from './middlewares/error.middleware';

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());

const options: Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Devago API',
      version: '1.0.0',
      description: 'An API to manage the projects of devago.com.br',
      contact: {
        name: 'Adson Gomes Oliveira',
        url: 'https://devago.com.br',
        email: 'contato@devago.com.br',
      }
    },
    servers: [
      {
        url: 'http://localhost:3001',
      },
    ],
  },
  apis: ['./build/routes/*.js']
}

const specs = swaggerJsDoc(options);

app.get('/', (_req: Request, res: Response) => {
  return res.status(HttpStatus.OK).send('OK!');
}); //root route for health check

app.use('/projects', routes.ProjectsRoutes);
app.use('/categories', routes.CategoriesRoutes);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs))
app.use(error);

export default app;
