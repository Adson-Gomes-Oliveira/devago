import { Model, INTEGER } from 'sequelize';
import ProjectModel from './project.model';
import CategoryModel from './category.model';
import db from './index';

class ProjectCategoryModel extends Model {
  projectId!: number;
  categoryId!: number;
}

ProjectCategoryModel.init({
  projectId: {
    type: INTEGER,
    primaryKey: true,
  },
  categoryId: {
    type: INTEGER,
    primaryKey: true,
  },
}, {
  sequelize: db,
  tableName: 'project_category',
  underscored: true,
  timestamps: false,
});

CategoryModel.belongsToMany(ProjectModel, {
  as: 'project',
  through: ProjectCategoryModel,
  foreignKey: 'projectId',
  otherKey: 'categoryId',
});

ProjectModel.belongsToMany(CategoryModel, {
  as: 'category',
  through: ProjectCategoryModel,
  foreignKey: 'categoryId',
  otherKey: 'projectId',
});
