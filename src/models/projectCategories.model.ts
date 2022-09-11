import { ResultSetHeader } from 'mysql2';

import connection from '../helpers/connection';
import IProjectCategories from '../interfaces/projectCategories.interface';

async function create(payload: IProjectCategories<number>): Promise<IProjectCategories<number>> {
  await connection.execute<ResultSetHeader>(`
    INSERT INTO projectCategories (project_id, category_id) VALUES
      (?, ?);
  `, [payload.project_id, payload.category_id]);

  return payload;
};

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
