"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CustomError_1 = __importDefault(require("../helpers/CustomError"));
class ProjectController {
    constructor(service) {
        this.service = service;
        this.getAll = this.getAll.bind(this);
        this.getByID = this.getByID.bind(this);
        this.create = this.create.bind(this);
        this.edit = this.edit.bind(this);
        this.exclude = this.exclude.bind(this);
    }
    getAll(_req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.service.getAll();
                if (result.message)
                    throw new CustomError_1.default(result);
                return res.status(result.code).json(result.data);
            }
            catch (error) {
                next(error);
            }
        });
    }
    getByID(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.service.getByID(Number(req.params.id));
                if (result.message)
                    throw new CustomError_1.default(result);
                return res.status(result.code).json(result.data);
            }
            catch (error) {
                next(error);
            }
        });
    }
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = req.body;
                const result = yield this.service.create(payload);
                if (result.message)
                    throw new CustomError_1.default(result);
                return res.status(result.code).json(result.data);
            }
            catch (error) {
                next(error);
            }
        });
    }
    edit(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = req.body;
                payload.id = Number(req.params.id);
                const result = yield this.service.edit(payload);
                if (result.message)
                    throw new CustomError_1.default(result);
                return res.status(result.code).json(result.data);
            }
            catch (error) {
                next(error);
            }
        });
    }
    exclude(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.service.exclude(Number(req.params.id));
                if (result.message)
                    throw new CustomError_1.default(result);
                return res.status(result.code).json(result.data);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = ProjectController;
