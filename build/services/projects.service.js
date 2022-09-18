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
const projects_model_1 = __importDefault(require("../models/projects.model"));
const httpStatus_1 = __importDefault(require("../helpers/httpStatus"));
const projects_validations_1 = __importDefault(require("../validations/projects.validations"));
class ProjectService {
    constructor(database = new projects_model_1.default()) {
        this.database = database;
    }
    ;
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.database.getAll();
            return { data: result, code: httpStatus_1.default.OK };
        });
    }
    ;
    create(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const validation = projects_validations_1.default.create(payload);
            if (validation.message)
                return validation;
            const result = yield this.database.create(payload);
            return { data: result, code: httpStatus_1.default.CREATED };
        });
    }
    editAll(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const validation = projects_validations_1.default.edit(payload);
            if (validation.message)
                return validation;
            const result = yield this.database.editAll(payload);
            return { data: result, code: httpStatus_1.default.CREATED };
        });
    }
    exclude(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.database.exclude(id);
            return { code: httpStatus_1.default.DELETED };
        });
    }
}
exports.default = ProjectService;
