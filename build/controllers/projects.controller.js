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
const projects_service_1 = __importDefault(require("../services/projects.service"));
class ProjectController {
    constructor(service = new projects_service_1.default()) {
        this.service = service;
    }
    ;
    getAll(_req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.service.getAll();
                if (result.message)
                    throw new CustomError_1.default(result);
                return res.status(result.code).json(result.data);
            }
            catch (error) {
                console.error(error);
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
    editAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = req.body;
                const { id } = req.params;
                payload.id = Number(id);
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
    exclude(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const result = yield this.service.exclude(Number(id));
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
