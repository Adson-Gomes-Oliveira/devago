import 'dotenv/config';
import CategoryModel from '../models/category.model';
import ProjectModel from '../models/project.model';
import ProjectCategoryModel from '../models/projectCategory.model';

const config = {
  url: process.env.DB_URL,
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
