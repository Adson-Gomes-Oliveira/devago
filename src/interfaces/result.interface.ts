import ICategory from '../interfaces/category.interface';
import IProject from './project.interface';

interface IResult {
  data?: ICategory<number> | ICategory<number>[] | IProject<number> | IProject<number>[]
  code: number,
  message?: string,
}

export default IResult;
