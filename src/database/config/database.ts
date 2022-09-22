import 'dotenv/config';
import CategoryModel from '../models/category.model';
import ProjectModel from '../models/project.model';
import ProjectCategoryModel from '../models/projectCategory.model';

const config = {
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '@DesertLirium123',
  database: process.env.DB_NAME || 'devago',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  models: [ CategoryModel, ProjectModel, ProjectCategoryModel ],
  dialect: 'mysql',
}

module.exports = config;
