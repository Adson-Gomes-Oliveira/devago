import { Model, BelongsToMany, Column, Table, PrimaryKey } from 'sequelize-typescript';
import { INTEGER, STRING } from 'sequelize';

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

  @PrimaryKey
  @Column(INTEGER)
  id!: number;
  @Column(STRING)
  name!: string;
}

export default CategoryModel;
