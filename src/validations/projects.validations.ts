import JOI from 'joi';
import HttpStatus from '../helpers/httpStatus';
import IProject from '../interfaces/project.interface';

const create = (payload: IProject<number>) => {
  const { error } = JOI.object({
    title: JOI.string().min(3).required(),
    description: JOI.string().min(3).required(),
    linkToRepo: JOI.string().min(3).required(),
    linkToProd: JOI.string().min(3).required(),
    thumbnail: JOI.string().min(3).required(),
    categoryIds: JOI.array().items(JOI.number().min(1)),
  }).validate(payload);

  if (error) return { message: error.details[0].message, code: HttpStatus.BAD_REQUEST };
  return {};
};

const edit = (payload: IProject<number>) => {
  const { error } = JOI.object({
    id: JOI.number().min(1).required(),
    title: JOI.string().min(3).required(),
    description: JOI.string().min(3).required(),
    linkToRepo: JOI.string().min(3).required(),
    linkToProd: JOI.string().min(3).required(),
    thumbnail: JOI.string().min(3).required(),
    categoryIds: JOI.array().items(JOI.number().min(1)),
  }).validate(payload);

  if (error) return { message: error.details[0].message, code: HttpStatus.BAD_REQUEST };
  return {};
};

export default {
  create,
  edit,
}
