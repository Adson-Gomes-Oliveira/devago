import { Sequelize } from 'sequelize';

import ProjectModel from "../database/models/project.model";
import IResult from "../interfaces/result.interface";
import IProject from "../interfaces/project.interface";
import HttpStatus from "../helpers/httpStatus";
import valid from "../validations/projects.validations";

const config = require('../../build/database/config/database');

export default class ProjectService {
  constructor(
    private database = ProjectModel,
    private sequelize = new Sequelize(config.development),
  ) {};

  private async transactionCreate(payload: IProject<number>) {
    const { title, description, linkToRepo,
    linkToProd, thumbnail, status } = payload;

    try {
      const transaction = await this.sequelize.transaction(async (t) => {
        const result = await this.database.create(
          { title, description, linkToRepo,
          linkToProd, thumbnail, status },
          { transaction: t },
        );
        return { data: result, code: HttpStatus.CREATED };
      });

      return transaction;
    } catch (error) {
      const err = error as unknown as Error;
      return { message: err.message, code: HttpStatus.INTERNAL };
    }
  };
  private async transactionEdit(payload: IProject<number>) {
    const { id, title, description, linkToRepo,
    linkToProd, thumbnail, status } = payload;

    try {
      const transaction = this.sequelize.transaction(async (t) => {
        await this.database.update(
          { title, description, linkToRepo,
          linkToProd, thumbnail, status },
          { where: { id }, transaction: t },
        );
        return { data: payload, code: HttpStatus.CREATED };
      });

      return transaction;
    } catch (error) {
      const err = error as unknown as Error;
      return { message: err.message, code: HttpStatus.INTERNAL };
    }
  };

  public async getAll(): Promise<IResult> {
    const result: IProject<number>[] = await this.database.findAll();
    return { data: result, code: HttpStatus.OK };
  };
  public async create(payload: IProject<number>): Promise<IResult> {
    const validation = valid.create(payload);
    if (validation.message) return validation;
  
    const create: IResult = await this.transactionCreate(payload);
    return create;
  };
  public async editAll(payload: IProject<number>): Promise<IResult> {
    const validation = valid.edit(payload);
    if (validation.message) return validation;
  
    const create: IResult = await this.transactionEdit(payload);
    return create;
  };
  public async exclude(id: number): Promise<IResult> {
    await this.database.destroy(
      { where: { id } }
    );
    return { code: HttpStatus.DELETED };
  };
};
