import { Request, Response } from 'express';
import IProject from '../interfaces/project.interface';
import IResult from '../interfaces/result.interface';
import projectsServices from '../services/projects.service';

async function getAll(_req: Request, res: Response): Promise<Response> {
  const result: IResult = await projectsServices.getAll();
  return res.status(result.code).json(result.data);
}

async function create(req: Request, res: Response): Promise<Response> {
  const payload: IProject<number> = req.body;
  const result: IResult = await projectsServices.create(payload);

  return res.status(result.code).json(result.data);
}

async function edit(req: Request, res: Response): Promise<Response> {
  const payload: IProject<number> = req.body;
  const { id } = req.params;
  payload.id = Number(id);

  const result: IResult = await projectsServices.edit(payload);

  return res.status(result.code).json(result.data);
}

async function exclude(req: Request, res: Response): Promise<Response> {
  const { id } = req.params;
  const result: IResult = await projectsServices.exclude(Number(id));

  return res.status(result.code).json();
}

export default {
  getAll,
  create,
  edit,
  exclude,
}