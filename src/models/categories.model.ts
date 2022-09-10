import { ResultSetHeader } from 'mysql2';
import connection from '../helpers/connection';
import ICategory from '../interfaces/category.interface';

async function getAll(): Promise<ICategory<number>[]> {
  const [result] = await connection.execute(`SELECT * FROM categories;`);
  return result as ICategory<number>[];
};

async function create(payload: ICategory<number>): Promise<ICategory<number>> {
  const create = await connection.execute<ResultSetHeader>(`
    INSERT INTO categories (name) VALUES
      (?);
  `, [payload.name]);

  const [dataInserted] = create;

  const newCategory: ICategory<number> = {
    id: dataInserted.insertId,
    name: payload.name,
  };

  return newCategory;
};

async function edit(payload: ICategory<number>): Promise<ICategory<number>> {
  await connection.execute<ResultSetHeader>(`
    UPDATE categories
    SET name = ?
    WHERE id = ?
  `, [payload.name, payload.id]);

  return payload;
};

async function exclude(id: number): Promise<void> {
  await connection.execute(`
    DELETE FROM categories
    WHERE id = ?
  `, [id]);
};

export default {
  getAll,
  create,
  edit,
  exclude,
};
