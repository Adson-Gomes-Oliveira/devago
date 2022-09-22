import { Model, BelongsToMany, Column, Table } from 'sequelize-typescript';
import { STRING, BOOLEAN } from 'sequelize';

import CategoryModel from './category.model';
import ProjectCategoryModel from './projectCategory.model';

@Table({
  tableName: 'projects',
  modelName: 'ProjectModel',
  underscored: true,
})

class ProjectModel extends Model {
  @BelongsToMany(() => CategoryModel, () => ProjectCategoryModel)
  categories!: CategoryModel[]

  @Column(STRING)
  title!: string;
  @Column(STRING)
  description!: string;
  @Column(STRING)
  linkToRepo!: string;
  @Column(STRING)
  linkToProd!: string;
  @Column(STRING)
  thumbnail!: string;
  @Column(BOOLEAN)
  status!: boolean;
}

export default ProjectModel;
