import { Request, Response } from 'express';
import ICategory from '../interfaces/category.interface';
import IResult from '../interfaces/result.interface';
import categoriesService from '../services/categories.service';

async function getAll(_req: Request, res: Response): Promise<Response> {
  const result: IResult = await categoriesService.getAll();
  return res.status(result.code).json(result.data);
}

async function create(req: Request, res: Response): Promise<Response> {
  const payload: ICategory<number> = req.body;
  const result: IResult = await categoriesService.create(payload);

  return res.status(result.code).json(result.data);
}

async function edit(req: Request, res: Response): Promise<Response> {
  const payload: ICategory<number> = req.body;
  const { id } = req.params;
  payload.id = Number(id);

  const result: IResult = await categoriesService.edit(payload);

  return res.status(result.code).json(result.data);
}

async function exclude(req: Request, res: Response): Promise<Response> {
  const { id } = req.params;
  const result: IResult = await categoriesService.exclude(Number(id));

  return res.status(result.code).json();
}

export default {
  getAll,
  create,
  edit,
  exclude,
}