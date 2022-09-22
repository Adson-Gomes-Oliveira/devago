import Sequelize from '../database/models/index'
import ProjectModel from "../database/models/project.model";
import CategoryModel from '../database/models/category.model';
import HttpStatus from "../helpers/httpStatus";
import { ValidationCreate, ValidationEdit } from "../validations/projects.validations";

import IResult from "../interfaces/result.interface";
import IProject from "../interfaces/project.interface";
import IService from '../interfaces/service.interface';
import ProjectCategoryModel from '../database/models/projectCategory.model';

class ProjectTransaction {
  constructor(
    protected model = ProjectModel,
    protected sequelize = Sequelize,
    private association = ProjectCategoryModel,
  ) {}

  private formatResponseObject(result: IProject<number>, categoryIds: number[]): IProject<number> {
    return {
      id: result.id,
      title: result.title,
      description: result.description,
      linkToRepo: result.linkToRepo,
      linkToProd: result.linkToProd,
      thumbnail: result.thumbnail,
      categoryIds,
    }
  }

  private async transactAssociate(projectId: number, categoryId: number): Promise<boolean | unknown> {
    try {
      const transactOP = await this.sequelize.transaction(async (t) => {
        await this.association.create(
          { projectId, categoryId },
          { transaction: t },
        );
        return true;
      });

      return transactOP;
    } catch (error) {
      return error;
    }
  }

  protected async transactCreate(payload: IProject<number>): Promise<IResult> {
    try {
      const { title, description, linkToRepo, linkToProd, thumbnail, status, categoryIds } = payload
      const transactOP = await this.sequelize.transaction(async (t) => { // Creating a new project
        const result = await this.model.create(
          { title, description, linkToRepo, linkToProd, thumbnail, status },
          { transaction: t },
        );
        
        return { 
          data: this.formatResponseObject(result, categoryIds as number[]),
          code: HttpStatus.CREATED,
        };
      });

      // Creating a new association between the new project and the categories
      const arrCategories: number[] = categoryIds as number[];
      const promises = [];

      for( let index = 0; index < arrCategories.length; index+=1 ) {
        promises.push(this.transactAssociate(transactOP.data.id as number, arrCategories[index]));
      }

      await Promise.all(promises);
      return transactOP;
    } catch (error) {
      const err = error as unknown as Error;
      return { message: err.message, code: HttpStatus.INTERNAL };
    }
  }

  protected async transactEdit(payload: IProject<number>): Promise<IResult> {
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
    const result: IProject<number>[] = await this.model.findAll();
    return { data: result, code: HttpStatus.OK };
  }

  public async getAllWithCategories(): Promise<IResult> {
    const result: IProject<number>[] = await this.model.findAll({
      include: [
        { model: CategoryModel, as: 'categories', through: { attributes: [] } },
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
    const verifyPayload = new ValidationCreate(payload);
    if (verifyPayload.validation().message) return verifyPayload.validation();
  
    const create: IResult = await this.transactCreate(payload);
    return create;
  }

  public async edit(payload: IProject<number>): Promise<IResult> {
    const verifyPayload = new ValidationEdit(payload);
    if (verifyPayload.validation().message) return verifyPayload.validation();
  
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
