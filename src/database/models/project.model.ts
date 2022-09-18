import { BOOLEAN, INTEGER, Model, STRING, TEXT } from 'sequelize';
import db from '.';

class ProjectModel extends Model {
  id!: number;
  title!: string;
  description!: string;
  link!: string;
  thumbnail!: string;
  status!: boolean;
}

ProjectModel.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: STRING,
  description: TEXT,
  link: STRING,
  thumbnail: STRING,
  status: BOOLEAN,
}, {
  sequelize: db,
  tableName: 'project',
  modelName: 'ProjectModel',
});

export default ProjectModel;
