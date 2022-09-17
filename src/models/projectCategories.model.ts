import { ResultSetHeader } from 'mysql2';

import connection from '../helpers/connection';
import IProjectCategories from '../interfaces/projectCategories.interface';

async function addRegister(project: number, categories: number): Promise<void> {
  await connection.execute<ResultSetHeader>(`
    INSERT INTO projectCategories (project_id, category_id) VALUES
      (?, ?);
  `, [project, categories]);
}

async function create(payload: IProjectCategories<number>): Promise<IProjectCategories<number>> {
  const { project_id, category_id } = payload;
  
  const promises = [];
  const categories = category_id as [];
  const project = project_id as number;

  for (let index = 0; index < categories.length; index += 1) {
    promises.push(addRegister(project, categories[index]));
  }

  await Promise.all(promises);
  return payload;
}

async function exclude(id: number): Promise<void> {
  await connection.execute(`
    DELETE FROM projectCategories
    WHERE id = ?
  `, [id]);
}

export default {
  create,
  exclude,
}
