import ICategory from '../interfaces/category.interface';

interface IResult {
  data?: ICategory<number> | ICategory<number>[],
  code: number,
  message?: string,
}

export default IResult;
