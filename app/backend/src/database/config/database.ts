import 'dotenv/config';
import CategoryModel from '../models/category.model';
import ProjectModel from '../models/project.model';
import ProjectCategoryModel from '../models/projectCategory.model';

const config = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  url: process.env.DB_URL,
  host: process.env.DB_HOST,
  models: [ CategoryModel, ProjectModel, ProjectCategoryModel ],
  dialect: 'postgres',
  dialectOptions: {
    encrypt: true,
    ssl : {
      rejectUnauthorized: false
    }
  },
}

module.exports = config;
