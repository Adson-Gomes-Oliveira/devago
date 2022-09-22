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
const project_model_1 = __importDefault(require("./project.model"));
const projectCategory_model_1 = __importDefault(require("./projectCategory.model"));
let CategoryModel = class CategoryModel extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => project_model_1.default, () => projectCategory_model_1.default)
], CategoryModel.prototype, "projects", void 0);
__decorate([
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.Column)(sequelize_1.INTEGER)
], CategoryModel.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_1.STRING)
], CategoryModel.prototype, "name", void 0);
CategoryModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'categories',
        modelName: 'CategoryModel',
        timestamps: false,
    })
], CategoryModel);
exports.default = CategoryModel;
