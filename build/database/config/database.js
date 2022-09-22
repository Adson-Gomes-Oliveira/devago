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
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '@DesertLirium123',
    database: process.env.DB_NAME || 'devago',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3306,
    models: [category_model_1.default, project_model_1.default, projectCategory_model_1.default],
    dialect: 'mysql',
};
module.exports = config;
