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
const index_1 = __importDefault(require("../database/models/index"));
const project_model_1 = __importDefault(require("../database/models/project.model"));
const httpStatus_1 = __importDefault(require("../helpers/httpStatus"));
const projects_validations_1 = __importDefault(require("../validations/projects.validations"));
class ProjectTransaction {
    constructor(model = project_model_1.default, sequelize = index_1.default) {
        this.model = model;
        this.sequelize = sequelize;
    }
    transactCreate(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const transactOP = yield this.sequelize.transaction((t) => __awaiter(this, void 0, void 0, function* () {
                    const result = yield this.model.create(Object.assign({}, payload), { transaction: t });
                    return { data: result, code: httpStatus_1.default.CREATED };
                }));
                return transactOP;
            }
            catch (error) {
                const err = error;
                return { message: err.message, code: httpStatus_1.default.INTERNAL };
            }
        });
    }
    transactEdit(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const transactOP = yield this.sequelize.transaction((t) => __awaiter(this, void 0, void 0, function* () {
                    const id = payload.id;
                    yield this.model.update(Object.assign({}, payload), { where: { id }, transaction: t });
                    return { data: payload, code: httpStatus_1.default.CREATED };
                }));
                return transactOP;
            }
            catch (error) {
                const err = error;
                return { message: err.message, code: httpStatus_1.default.INTERNAL };
            }
        });
    }
}
class ProjectService extends ProjectTransaction {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.model.findAll();
            return { data: result, code: httpStatus_1.default.OK };
        });
    }
    getByID(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.model.findByPk(id);
            if (result === null) {
                return { message: "ID doesn't exist", code: httpStatus_1.default.BAD_REQUEST };
            }
            return { data: result, code: httpStatus_1.default.OK };
        });
    }
    create(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const validation = projects_validations_1.default.create(payload);
            if (validation.message)
                return validation;
            const create = yield this.transactCreate(payload);
            return create;
        });
    }
    edit(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const validation = projects_validations_1.default.edit(payload);
            if (validation.message)
                return validation;
            const create = yield this.transactEdit(payload);
            return create;
        });
    }
    exclude(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.model.destroy({ where: { id } });
            return { code: httpStatus_1.default.DELETED };
        });
    }
}
exports.default = ProjectService;
