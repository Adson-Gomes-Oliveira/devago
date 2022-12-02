"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const project_model_1 = __importDefault(require("./project.model"));
const category_model_1 = __importDefault(require("./category.model"));
const projectCategory_model_1 = __importDefault(require("./projectCategory.model"));
category_model_1.default.belongsToMany(project_model_1.default, {
    as: 'project',
    through: projectCategory_model_1.default,
    foreignKey: 'project_id',
    otherKey: 'category_id',
});
project_model_1.default.belongsToMany(category_model_1.default, {
    as: 'category',
    through: projectCategory_model_1.default,
    foreignKey: 'category_id',
    otherKey: 'project_id',
});
