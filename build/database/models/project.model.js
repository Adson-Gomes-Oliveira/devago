"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class ProjectModel extends sequelize_1.Model {
}
ProjectModel.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    title: sequelize_1.STRING,
    description: sequelize_1.TEXT,
    linkToRepo: sequelize_1.STRING,
    linkToProd: sequelize_1.STRING,
    thumbnail: sequelize_1.STRING,
    status: sequelize_1.BOOLEAN,
}, {
    sequelize: _1.default,
    tableName: 'project',
    modelName: 'ProjectModel',
});
exports.default = ProjectModel;
