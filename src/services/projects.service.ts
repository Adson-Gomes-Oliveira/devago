import ProjectModel from "../models/projects.model";
import IResult from "../interfaces/result.interface";
import IProject from "../interfaces/project.interface";
import HttpStatus from "../helpers/httpStatus";
import valid from "../validations/projects.validations";

export default class ProjectService {
  constructor(private database = new ProjectModel()) {};

  public async getAll(): Promise<IResult> {
    const result: IProject<number>[] = await this.database.getAll();
    return { data: result, code: HttpStatus.OK };
  };

  public async create(payload: IProject<number>): Promise<IResult> {
    const validation = valid.create(payload);
    if (validation.message) return validation;
  
    const result: IProject<number> = await this.database.create(payload);
    return { data: result, code: HttpStatus.CREATED };
  }

  public async editAll(payload: IProject<number>): Promise<IResult> {
    const validation = valid.edit(payload);
    if (validation.message) return validation;
  
    const result: IProject<number> = await this.database.editAll(payload);
    return { data: result, code: HttpStatus.CREATED };
  }

  public async exclude(id: number): Promise<IResult> {
    await this.database.exclude(id);
    return { code: HttpStatus.DELETED };
  }
}
