import categoriesModel from '../models/categories.model';
import HttpStatus from '../helpers/httpStatus';
import IResult from '../interfaces/result.interface';
import ICategory from '../interfaces/category.interface';
import valid from '../validations/categories.validations';

async function getAll(): Promise<IResult> {
  const result: ICategory<number>[] = await categoriesModel.getAll();
  return { data: result, code: HttpStatus.OK };
};

async function create(payload: ICategory<number>): Promise<IResult> {
  const validations = valid.create(payload);
  if (validations.message) return validations;

  const result: ICategory<number> = await categoriesModel.create(payload);
  return { data: result, code: HttpStatus.CREATED };
}

async function edit(payload: ICategory<number>): Promise<IResult> {
  const validations = valid.edit(payload);
  if (validations.message) return validations;

  const result: ICategory<number> = await categoriesModel.edit(payload);
  return { data: result, code: HttpStatus.CREATED };
}

async function exclude(id: number): Promise<IResult> {
  await categoriesModel.exclude(id);
  return { code: HttpStatus.DELETED };
}

export default {
  getAll,
  create,
  edit,
  exclude,
}