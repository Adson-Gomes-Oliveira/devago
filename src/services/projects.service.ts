import projectsModel from '../models/projects.model';
import projectCategoriesModel from '../models/projectCategories.model';
import IProjectCategories from '../interfaces/projectCategories.interface';
import IResult from '../interfaces/result.interface';
import IProject from '../interfaces/project.interface';
import HttpStatus from '../helpers/httpStatus';
import valid from '../validations/projects.validations';

async function getAll(): Promise<IResult> {
  const result: IProject<number>[] = await projectsModel.getAll();
  return { data: result, code: HttpStatus.OK };
};

async function create(payload: IProject<number>): Promise<IResult> {
  const validation = valid.create(payload);
  if (validation.message) return validation;

  const result: IProject<number> = await projectsModel.create(payload);
  const newProjectCategory: IProjectCategories<number> = {
    project_id: result.id,
    category_id: payload.categoryIds, 
  };

  await projectCategoriesModel.create(newProjectCategory);
  return { data: result, code: HttpStatus.CREATED };
}

async function edit(payload: IProject<number>): Promise<IResult> {
  const validation = valid.edit(payload);
  if (validation.message) return validation;

  const result: IProject<number> = await projectsModel.edit(payload);
  const newProjectCategory: IProjectCategories<number> = {
    project_id: result.id,
    category_id: payload.categoryIds, 
  };

  await projectCategoriesModel.create(newProjectCategory);

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