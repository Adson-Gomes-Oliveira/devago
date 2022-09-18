"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const httpStatus_1 = __importDefault(require("../helpers/httpStatus"));
const create = (payload) => {
    const { error } = joi_1.default.object({
        title: joi_1.default.string().min(3).required(),
        description: joi_1.default.string().min(3).required(),
        thumbnail: joi_1.default.string().min(3).required(),
        categoryIds: joi_1.default.array().items(joi_1.default.number().min(1)),
    }).validate(payload);
    if (error)
        return { message: error.details[0].message, code: httpStatus_1.default.BAD_REQUEST };
    return {};
};
const edit = (payload) => {
    const { error } = joi_1.default.object({
        id: joi_1.default.number().min(1).required(),
        title: joi_1.default.string().min(3).required(),
        description: joi_1.default.string().min(3).required(),
        thumbnail: joi_1.default.string().min(3).required(),
        categoryIds: joi_1.default.array().items(joi_1.default.number().min(1)),
    }).validate(payload);
    if (error)
        return { message: error.details[0].message, code: httpStatus_1.default.BAD_REQUEST };
    return {};
};
exports.default = {
    create,
    edit,
};
