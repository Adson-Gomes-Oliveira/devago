import IProject from './project.interface';

interface IResult {
  data?: IProject<number> | IProject<number>[]
  code: number,
  message?: string,
}

export default IResult;
