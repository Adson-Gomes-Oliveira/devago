"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomError extends Error {
    constructor(data) {
        super(data.message);
        this.code = data.code;
    }
}
exports.default = CustomError;
