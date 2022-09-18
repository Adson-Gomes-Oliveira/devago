"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const httpStatus_1 = __importDefault(require("../helpers/httpStatus"));
function error(err, _req, res, _next) {
    if ('code' in err)
        return res.status(err.code).json(err.message);
    return res.status(httpStatus_1.default.INTERNAL).json(err.message);
}
exports.default = error;
