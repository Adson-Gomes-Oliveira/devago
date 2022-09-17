import { Request, Response, NextFunction } from "express";
import CustomError from "../helpers/CustomError";
import IProject from "../interfaces/project.interface";
import IResult from "../interfaces/result.interface";
import ProjectService from "../services/projects.service";

export default class ProjectController {
  constructor(private service: ProjectService = new ProjectService()) {};

  async getAll(_req: Request, res: Response, next: NextFunction)
  : Promise<Response | undefined> {
    try {
      const result: IResult = await this.service.getAll();
      if (result.message) throw new CustomError(result);

      return res.status(result.code).json(result.data);
    } catch (error) {
      next(error)
    }
  }

  async create(req: Request, res: Response, next: NextFunction)
  : Promise<Response | undefined> {
    try {
      const payload: IProject<number> = req.body;

      const result: IResult = await this.service.create(payload);
      if (result.message) throw new CustomError(result);

      return res.status(result.code).json(result.data);
    } catch (error) {
      next(error)
    }
  }

  async editAll(req: Request, res: Response, next: NextFunction)
  : Promise<Response | undefined> {
    try {
      const payload: IProject<number> = req.body;
      const { id } = req.params;
      payload.id = Number(id);

      const result: IResult = await this.service.create(payload);
      if (result.message) throw new CustomError(result);

      return res.status(result.code).json(result.data);
    } catch (error) {
      next(error)
    }
  }

  async exclude(req: Request, res: Response, next: NextFunction)
  :Promise<Response | undefined> {
    try {
      const { id } = req.params;

      const result: IResult = await this.service.exclude(Number(id));
      if (result.message) throw new CustomError(result);
  
      return res.status(result.code).json(result.data);
    } catch (error) {
      next(error);
    }
  }
}
