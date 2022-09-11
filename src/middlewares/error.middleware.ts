import { Request, Response, NextFunction } from 'express';
export default function error(err: Error, _req: Request, res: Response, _next: NextFunction) {
  return res.status(err.code as number).json(err.message);
}