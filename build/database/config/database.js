"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const category_model_1 = __importDefault(require("../models/category.model"));
const project_model_1 = __importDefault(require("../models/project.model"));
const projectCategory_model_1 = __importDefault(require("../models/projectCategory.model"));
const config = {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    models: [category_model_1.default, project_model_1.default, projectCategory_model_1.default],
    dialect: 'postgres',
};
module.exports = config;
