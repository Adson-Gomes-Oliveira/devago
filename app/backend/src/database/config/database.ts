import 'dotenv/config';
import CategoryModel from '../models/category.model';
import ProjectModel from '../models/project.model';
import ProjectCategoryModel from '../models/projectCategory.model';

const config = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  models: [ CategoryModel, ProjectModel, ProjectCategoryModel ],
  dialect: 'postgres',
}

module.exports = config;
