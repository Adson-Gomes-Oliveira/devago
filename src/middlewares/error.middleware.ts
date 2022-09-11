import { Request, Response, NextFunction } from 'express';
import IError from '../interfaces/error.interface';

export default function error(err: IError, _req: Request, res: Response, _next: NextFunction) {
  return res.status(err.code).json({
    message: err.message,
    code: err.code,
  });
}