import IResult from "../interfaces/result.interface";

class CustomError extends Error {
  code: number;

  constructor(data: IResult) {
    super(data.message);
    this.code = data.code;
  }
}

export default CustomError;
