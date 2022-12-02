import CategoryModel from '../database/models/category.model';
import HttpStatus from '../helpers/httpStatus';

import IResult from '../interfaces/result.interface';
import ICategory from '../interfaces/category.interface';
import { IMinService } from '../interfaces/service.interface';

class CategoryService implements IMinService {
  constructor(private model = CategoryModel) {}

  public async getAll(): Promise<IResult> {
    const result: ICategory<number>[] = await this.model.findAll();
    return { data: result, code: HttpStatus.OK };
  }
}

export default CategoryService;
