import { Model, INTEGER, STRING, Sequelize } from 'sequelize';
import db from './index';

class CategoryModel extends Model {
  id!: string;
  name!: string;
};

CategoryModel.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: STRING,
}, {
  sequelize: db,
  tableName: 'category',
  modelName: 'CategoryModel',
  timestamps: false,
});

export default CategoryModel;
