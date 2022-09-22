import { Model, ForeignKey, Column, Table } from 'sequelize-typescript';
import { INTEGER } from 'sequelize';

import ProjectModel from './project.model';
import CategoryModel from './category.model';

@Table({
  tableName: 'projectCategories',
  underscored: true,
  timestamps: false,
})

class ProjectCategoryModel extends Model {
  @ForeignKey(() => ProjectModel)
  @Column(INTEGER)
  projectId!: number;

  @ForeignKey(() => CategoryModel)
  @Column(INTEGER)
  categoryId!: number;
}

export default ProjectCategoryModel;
