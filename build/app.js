"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const httpStatus_1 = __importDefault(require("./helpers/httpStatus"));
const error_middleware_1 = __importDefault(require("./middlewares/error.middleware"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.get('/', (_req, res) => {
    return res.status(httpStatus_1.default.OK).send('OK!');
}); //root route for health check
app.use('/projects', index_routes_1.default.ProjectsRoutes);
app.use(error_middleware_1.default);
exports.default = app;
