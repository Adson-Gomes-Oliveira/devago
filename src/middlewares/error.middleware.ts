import { Request, Response, NextFunction } from 'express';
import IError from '../interfaces/error.interface';
import HttpStatus from '../helpers/httpStatus';

export default function error(err: IError, _req: Request, res: Response, _next: NextFunction) {
  if ('code' in err) return res.status(err.code).json(err.message);
  return res.status(HttpStatus.INTERNAL).json(err.message);
}
