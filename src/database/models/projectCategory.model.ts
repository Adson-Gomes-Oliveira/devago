import { Model, ForeignKey, Column, Table, PrimaryKey } from 'sequelize-typescript';
import { INTEGER } from 'sequelize';

import ProjectModel from './project.model';
import CategoryModel from './category.model';

@Table({
  tableName: 'projectCategories',
  underscored: true,
  timestamps: false,
})

class ProjectCategoryModel extends Model {
  @PrimaryKey
  @ForeignKey(() => ProjectModel)
  @Column(INTEGER)
  projectId!: number;

  @PrimaryKey
  @ForeignKey(() => CategoryModel)
  @Column(INTEGER)
  categoryId!: number;
}

export default ProjectCategoryModel;
