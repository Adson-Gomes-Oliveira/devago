"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["OK"] = 200] = "OK";
    HttpStatus[HttpStatus["CREATED"] = 201] = "CREATED";
    HttpStatus[HttpStatus["DELETED"] = 204] = "DELETED";
    HttpStatus[HttpStatus["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpStatus[HttpStatus["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HttpStatus[HttpStatus["NO_CONTENT"] = 404] = "NO_CONTENT";
    HttpStatus[HttpStatus["INTERNAL"] = 500] = "INTERNAL";
})(HttpStatus || (HttpStatus = {}));
exports.default = HttpStatus;
