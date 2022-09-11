import { NextFunction, Request, Response } from 'express';

import IProject from '../interfaces/project.interface';
import IResult from '../interfaces/result.interface';
import IError from '../interfaces/error.interface';
import projectsServices from '../services/projects.service';
import CustomError from '../helpers/CustomError';

async function getAll(_req: Request, res: Response, next: NextFunction)
  : Promise<Response | undefined> {
  try {
    const result: IResult = await projectsServices.getAll();
    return res.status(result.code).json(result.data);
  } catch (error) {
    next(error);
  }
}

async function create(req: Request, res: Response, next: NextFunction)
  : Promise<Response | undefined> {
  try {
    const payload: IProject<number> = req.body;
  
    const result: IResult | IError = await projectsServices.create(payload);
    if (result.message) throw new CustomError(result);
  
    return res.status(result.code).json(result.data);
  } catch (error) {
    next(error);
  }
}

async function edit(req: Request, res: Response, next: NextFunction)
  : Promise<Response | undefined> {
  try {
    const payload: IProject<number> = req.body;
    const { id } = req.params;
    payload.id = Number(id);
  
    const result: IResult | IError = await projectsServices.edit(payload);
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
  
    const result: IResult = await projectsServices.exclude(Number(id));
    return res.status(result.code).json();
  } catch (error) {
    next(error);
  }
}

export default {
  getAll,
  create,
  edit,
  exclude,
}
