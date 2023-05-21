import { Model, BelongsToMany, Column, Table } from 'sequelize-typescript';
import { STRING } from 'sequelize';

import ProjectModel from './project.model';
import ProjectCategoryModel from './projectCategory.model';

@Table({
  tableName: 'categories',
  modelName: 'CategoryModel',
  timestamps: false,
})

class CategoryModel extends Model {
  @BelongsToMany(() => ProjectModel, () => ProjectCategoryModel)
  projects!: ProjectModel[]

  @Column(STRING)
  name!: string;
}

export default CategoryModel;
