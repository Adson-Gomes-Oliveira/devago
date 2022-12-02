import ICategory from './category.interface';
import IProject from './project.interface';

interface IResult {
  data?: IProject<number> | IProject<number>[] | ICategory<number>[]
  code: number,
  message?: string,
}

export default IResult;
