import Sequelize from '../database/models/index'
import ProjectModel from "../database/models/project.model";
import CategoryModel from '../database/models/category.model';
import HttpStatus from "../helpers/httpStatus";
import valid from "../validations/projects.validations";

import IResult from "../interfaces/result.interface";
import IProject from "../interfaces/project.interface";
import IService from '../interfaces/service.interface';
import ProjectCategoryModel from '../database/models/projectCategory.model';

class ProjectTransaction {
  constructor(
    protected model = ProjectModel,
    protected sequelize = Sequelize,
  ) {}

  protected async transactCreate(payload: IProject<number>)
  : Promise<IResult> {
    try {
      const transactOP = await this.sequelize.transaction(async (t) => {
        const result = await this.model.create(
          {...payload},
          {transaction: t},
        );

        return { data: result, code: HttpStatus.CREATED };
      });

      return transactOP;
    } catch (error) {
      const err = error as unknown as Error;
      return { message: err.message, code: HttpStatus.INTERNAL };
    }
  }

  protected async transactEdit(payload: IProject<number>)
  : Promise<IResult> {
    try {
      const transactOP = await this.sequelize.transaction(async (t) => {
        const id = payload.id;
        await this.model.update(
          { ...payload },
          { where: { id }, transaction: t },
        );

        return { data: payload, code: HttpStatus.CREATED };
      });

      return transactOP;
    } catch (error) {
      const err = error as unknown as Error;
      return { message: err.message, code: HttpStatus.INTERNAL };
    }
  }
}

class ProjectService extends ProjectTransaction
implements IService {
  public async getAll(): Promise<IResult> {
    const result: IProject<number>[] = await this.model.findAll({
      include: [
        { model: CategoryModel, as: 'category', through: { attributes: [] } },
      ]
    });
    return { data: result, code: HttpStatus.OK };
  }

  public async getByID(id: number): Promise<IResult> {
    const result: IProject<number> | null = await this.model.findByPk(id);
    if (result === null) {
      return { message: "ID doesn't exist", code: HttpStatus.BAD_REQUEST };
    }

    return { data: result, code: HttpStatus.OK };
  }

  public async create(payload: IProject<number>): Promise<IResult> {
    const validation = valid.create(payload);
    if (validation.message) return validation;
  
    const create: IResult = await this.transactCreate(payload);
    return create;
  }

  public async edit(payload: IProject<number>): Promise<IResult> {
    const validation = valid.edit(payload);
    if (validation.message) return validation;
  
    const create: IResult = await this.transactEdit(payload);
    return create;
  }

  public async exclude(id: number): Promise<IResult> {
    await this.model.destroy(
      { where: { id } }
    );
    return { code: HttpStatus.DELETED };
  }
}

export default ProjectService;
