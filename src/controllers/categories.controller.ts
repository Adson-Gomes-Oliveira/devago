import { Request, Response, NextFunction } from 'express';

import CategoryService from '../services/categories.service';
import IResult from '../interfaces/result.interface';

class CategoryController {
  constructor(private service: CategoryService) {
    this.getAll = this.getAll.bind(this);
  }

  public async getAll(_req: Request, res: Response, next: NextFunction)
  : Promise<Response | undefined> {
    try {
      const result: IResult = await this.service.getAll();
      return res.status(result.code).json(result.data);
    } catch (error) {
      next(error);
    }
  }
}

export default CategoryController;
