import IError from "../interfaces/error.interface";
import IResult from "../interfaces/result.interface";

class CustomError extends Error {
  code: number;

  constructor(data: IError | IResult) {
    super(data.message);
    this.code = data.code;
  }
}

export default CustomError;
