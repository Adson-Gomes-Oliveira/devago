import { NextFunction, Request, Response } from 'express';

import ICategory from '../interfaces/category.interface';
import IResult from '../interfaces/result.interface';
import IError from '../interfaces/error.interface';
import categoriesService from '../services/categories.service';
import CustomError from '../helpers/CustomError';

async function getAll(_req: Request, res: Response, next: NextFunction)
  : Promise<Response | undefined> {
  try {
    const result: IResult = await categoriesService.getAll();
    return res.status(result.code).json(result.data);
  } catch (error) {
    next(error)
  }
}

async function create(req: Request, res: Response, next: NextFunction)
  : Promise<Response | undefined> {
  try {
    const payload: ICategory<number> = req.body;
  
    const result: IResult | IError = await categoriesService.create(payload);
    if (result.message) throw new CustomError(result);
  
    return res.status(result.code).json(result.data);
  } catch (error) {
    next(error)
  }
}

async function edit(req: Request, res: Response, next: NextFunction)
  : Promise<Response | undefined> {
  try {
    const payload: ICategory<number> = req.body;
    const { id } = req.params;
    payload.id = Number(id);
  
    const result: IResult | IError = await categoriesService.edit(payload);
    if (result.message) throw new CustomError(result);
  
    return res.status(result.code).json(result.data);
  } catch (error) {
    next(error)
  }
}

async function exclude(req: Request, res: Response, next: NextFunction)
  : Promise<Response | undefined> {
  try {
    const { id } = req.params;
  
    const result: IResult = await categoriesService.exclude(Number(id));
    return res.status(result.code).json();
  } catch (error) {
    next(error)
  }
}

export default {
  getAll,
  create,
  edit,
  exclude,
}
