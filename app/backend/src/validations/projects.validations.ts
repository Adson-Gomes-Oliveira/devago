import JOI from 'joi';
import HttpStatus from '../helpers/httpStatus';
import IProject from '../interfaces/project.interface';
import IResult from '../interfaces/result.interface';

abstract class Validate {
  protected _payload: IProject<number>;
  constructor(payload: IProject<number>) {
    this._payload = payload;
  }

  public abstract validation(): IResult;
}

export class ValidationCreate extends Validate {
  public validation(): IResult {
    const { error } = JOI.object({
      title: JOI.string().min(3).required(),
      description: JOI.string().min(3).required(),
      linkToRepo: JOI.string().min(3).required(),
      linkToProd: JOI.string().min(3).required(),
      thumbnail: JOI.string().min(3).required(),
      categoryIds: JOI.array().items(JOI.number().min(1)).required(),
    }).validate(this._payload);

    if (error) return { message: error.details[0].message, code: HttpStatus.BAD_REQUEST };
    return {} as IResult;
  }
}

export class ValidationEdit extends Validate {
  public validation(): IResult {
    const { error } = JOI.object({
      id: JOI.number().min(1).required(),
      title: JOI.string().min(3).required(),
      description: JOI.string().min(3).required(),
      linkToRepo: JOI.string().min(3).required(),
      linkToProd: JOI.string().min(3).required(),
      thumbnail: JOI.string().min(3).required(),
    }).validate(this._payload);
  
    if (error) return { message: error.details[0].message, code: HttpStatus.BAD_REQUEST };
    return {} as IResult;
  }
}
