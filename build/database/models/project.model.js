"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_1 = require("sequelize");
const category_model_1 = __importDefault(require("./category.model"));
const projectCategory_model_1 = __importDefault(require("./projectCategory.model"));
let ProjectModel = class ProjectModel extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => category_model_1.default, () => projectCategory_model_1.default)
], ProjectModel.prototype, "categories", void 0);
__decorate([
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.Column)(sequelize_1.INTEGER)
], ProjectModel.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_1.STRING)
], ProjectModel.prototype, "title", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_1.STRING)
], ProjectModel.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_1.STRING)
], ProjectModel.prototype, "linkToRepo", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_1.STRING)
], ProjectModel.prototype, "linkToProd", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_1.STRING)
], ProjectModel.prototype, "thumbnail", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_1.BOOLEAN)
], ProjectModel.prototype, "status", void 0);
ProjectModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'projects',
        modelName: 'ProjectModel',
        underscored: true,
    })
], ProjectModel);
exports.default = ProjectModel;
