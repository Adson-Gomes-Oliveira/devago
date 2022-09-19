import { Request, Response, NextFunction } from "express";
import CustomError from "../helpers/CustomError";
import IProject from "../interfaces/project.interface";
import IResult from "../interfaces/result.interface";
import ProjectService from "../services/projects.service";

export default class ProjectController {
  constructor(private service = new ProjectService()) {};

  public async getAll(_req: Request, res: Response, next: NextFunction)
  : Promise<Response | undefined> {
    try {
      const result: IResult = await this.service.getAll();
      if (result.message) throw new CustomError(result);

      return res.status(result.code).json(result.data);
    } catch (error) {
      next(error);
    }
  };
};
