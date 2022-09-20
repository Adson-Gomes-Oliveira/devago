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
class ProjectService {
    constructor(database = project_model_1.default, sequelize = index_1.default) {
        this.database = database;
        this.sequelize = sequelize;
    }
    ;
    transactionCreate(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, description, linkToRepo, linkToProd, thumbnail, status } = payload;
            try {
                const transaction = yield this.sequelize.transaction((t) => __awaiter(this, void 0, void 0, function* () {
                    const result = yield this.database.create({ title, description, linkToRepo,
                        linkToProd, thumbnail, status }, { transaction: t });
                    return { data: result, code: httpStatus_1.default.CREATED };
                }));
                return transaction;
            }
            catch (error) {
                const err = error;
                return { message: err.message, code: httpStatus_1.default.INTERNAL };
            }
        });
    }
    ;
    transactionEdit(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, title, description, linkToRepo, linkToProd, thumbnail, status } = payload;
            try {
                const transaction = this.sequelize.transaction((t) => __awaiter(this, void 0, void 0, function* () {
                    yield this.database.update({ title, description, linkToRepo,
                        linkToProd, thumbnail, status }, { where: { id }, transaction: t });
                    return { data: payload, code: httpStatus_1.default.CREATED };
                }));
                return transaction;
            }
            catch (error) {
                const err = error;
                return { message: err.message, code: httpStatus_1.default.INTERNAL };
            }
        });
    }
    ;
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.database.findAll();
            return { data: result, code: httpStatus_1.default.OK };
        });
    }
    ;
    create(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const validation = projects_validations_1.default.create(payload);
            if (validation.message)
                return validation;
            const create = yield this.transactionCreate(payload);
            return create;
        });
    }
    ;
    editAll(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const validation = projects_validations_1.default.edit(payload);
            if (validation.message)
                return validation;
            const create = yield this.transactionEdit(payload);
            return create;
        });
    }
    ;
    exclude(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.database.destroy({ where: { id } });
            return { code: httpStatus_1.default.DELETED };
        });
    }
    ;
}
exports.default = ProjectService;
;
