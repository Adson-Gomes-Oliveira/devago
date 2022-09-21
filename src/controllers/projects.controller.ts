import { Request, Response, NextFunction } from "express";
import CustomError from "../helpers/CustomError";
import IProject from "../interfaces/project.interface";
import IResult from "../interfaces/result.interface";
import ProjectService from "../services/projects.service";

class ProjectController {
  constructor(private service = new ProjectService()) {
    this.getAll = this.getAll.bind(this);
    this.create = this.create.bind(this);
    this.edit = this.edit.bind(this);
    this.exclude = this.exclude.bind(this);
  }

  async getAll (_req: Request, res: Response, next: NextFunction)
  : Promise<Response | undefined> {
    try {
      const result: IResult = await this.service.getAll();
      if (result.message) throw new CustomError(result);

      return res.status(result.code).json(result.data);
    } catch (error) {
      next(error);
    }
  }

  async create (req: Request, res: Response, next: NextFunction)
  : Promise<Response | undefined> {
    try {
      const payload: IProject<number> = req.body;
      const result: IResult = await this.service.create(payload);
      if (result.message) throw new CustomError(result);

      return res.status(result.code).json(result.data);
    } catch (error) {
      next(error);
    }
  }

  async edit (req: Request, res: Response, next: NextFunction)
  : Promise<Response | undefined> {
    try {
      const payload: IProject<number> = req.body;
      payload.id = Number(req.params.id);

      const result: IResult = await this.service.edit(payload);
      if (result.message) throw new CustomError(result);

      return res.status(result.code).json(result.data);
    } catch (error) {
      next(error);
    }
  }

  async exclude (req: Request, res: Response, next: NextFunction)
  : Promise<Response | undefined> {
    try {
      const result: IResult = await this.service.exclude(Number(req.params.id));
      if (result.message) throw new CustomError(result);

      return res.status(result.code).json(result.data);
    } catch (error) {
      next(error);
    }
  }
}

export default ProjectController;
