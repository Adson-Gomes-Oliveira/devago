import { ResultSetHeader } from "mysql2";

import connection from "../helpers/connection";
import IProject from "../interfaces/project.interface";

async function getAll(): Promise<IProject<number>[]> {
  const [result] = await connection.execute(`SELECT * FROM projects`);
  return result as IProject<number>[];
};

async function create(payload: IProject<number>): Promise<IProject<number>> {
  const create = await connection.execute<ResultSetHeader>(`
    INSERT INTO projects (title, description, thumbnail) VALUES
      (?, ?, ?);
  `, [payload.title, payload.description, payload.thumbnail]);

  const [dataInserted] = create;

  const newProject = {
    id: dataInserted.insertId,
    ...payload,
  };

  return newProject;
};

async function edit(payload: IProject<number>): Promise<IProject<number>> {
  await connection.execute<ResultSetHeader>(`
    UPDATE projects
    SET title = ?, description = ?, thumbnail = ?
    WHERE id = ?
  `, [payload.title, payload.description, payload.thumbnail, payload.id]);

  return payload;
};

async function exclude(id: number): Promise<void> {
  await connection.execute(`
    DELETE FROM projects 
    WHERE id = ?
  `, [id]);
};

export default {
  getAll,
  create,
  edit,
  exclude,
}
