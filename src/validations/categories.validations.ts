import JOI from 'joi';
import ICategory from '../interfaces/category.interface';
import HttpStatus from '../helpers/httpStatus';

const create = (payload: ICategory<number>) => {
  const { error } = JOI.object({
    name: JOI.string().min(3).required(),
  }).validate(payload);

  if (error) return { message: error.message, code: HttpStatus.BAD_REQUEST };
  return {};
}

const edit = (payload: ICategory<number>) => {
  const { error } = JOI.object({
    id: JOI.number().min(1).required(),
    name: JOI.string().min(3).required(),
  }).validate(payload);

  if (error) return { message: error.message, code: HttpStatus.BAD_REQUEST };
  return {};
}

export default {
  create,
  edit,
}