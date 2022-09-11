import projectsModel from '../models/projects.model';
import HttpStatus from '../helpers/httpStatus';
import IResult from '../interfaces/result.interface';
import IProject from '../interfaces/project.interface';
import valid from '../validations/projects.validations';

async function getAll(): Promise<IResult> {
  const result: IProject<number>[] = await projectsModel.getAll();
  return { data: result, code: HttpStatus.OK };
};

async function create(payload: IProject<number>): Promise<IResult> {
  const validation = valid.create(payload);
  if (validation.message) return validation;

  const result: IProject<number> = await projectsModel.create(payload);
  return { data: result, code: HttpStatus.CREATED };
}

async function edit(payload: IProject<number>): Promise<IResult> {
  const validation = valid.edit(payload);
  if (validation.message) return validation;

  // Missing creation of a new register on projectCategories table

  const result: IProject<number> = await projectsModel.edit(payload);
  return { data: result, code: HttpStatus.CREATED };
}

async function exclude(id: number): Promise<IResult> {
  await projectsModel.exclude(id);
  return { code: HttpStatus.DELETED };
}

export default {
  getAll,
  create,
  edit,
  exclude,
}