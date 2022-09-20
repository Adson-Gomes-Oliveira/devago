import { Request, Response, NextFunction } from "express";
import CustomError from "../helpers/CustomError";
import IError from "../interfaces/error.interface";
import IProject from "../interfaces/project.interface";
import IResult from "../interfaces/result.interface";
import ProjectService from "../services/projects.service";

export default class ProjectController {
  constructor(private service = new ProjectService()) {
    this.getAll = this.getAll.bind(this);
    this.create = this.create.bind(this);
    this.editAll = this.editAll.bind(this);
    this.exclude = this.exclude.bind(this);
  };

  async getAll (_req: Request, res: Response, next: NextFunction)
  : Promise<Response | undefined> {
    try {
      const result: IResult | IError = await this.service.getAll();
      if (result.message) throw new CustomError(result);

      return res.status(result.code).json(result.data);
    } catch (error) {
      next(error);
    }
  };

  async create (req: Request, res: Response, next: NextFunction)
  : Promise<Response | undefined> {
    try {
      const payload: IProject<number> = req.body;
      const result: IResult | IError = await this.service.create(payload);
      if (result.message) throw new CustomError(result);

      return res.status(result.code).json(result.data);
    } catch (error) {
      next(error);
    }
  };

  async editAll (req: Request, res: Response, next: NextFunction)
  : Promise<Response | undefined> {
    try {
      const payload: IProject<number> = req.body;
      payload.id = Number(req.params.id);

      const result: IResult | IError = await this.service.editAll(payload);
      if (result.message) throw new CustomError(result);

      return res.status(result.code).json(result.data);
    } catch (error) {
      next(error);
    }
  };

  async exclude (req: Request, res: Response, next: NextFunction)
  : Promise<Response | undefined> {
    try {
      const result: IResult | IError = await this.service.exclude(Number(req.params.id));
      if (result.message) throw new CustomError(result);

      return res.status(result.code).json(result.data);
    } catch (error) {
      next(error);
    }
  };
};
