"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const projects_controller_1 = __importDefault(require("../controllers/projects.controller"));
const projects_service_1 = __importDefault(require("../services/projects.service"));
const router = express_1.default.Router();
const service = new projects_service_1.default();
const controller = new projects_controller_1.default(service);
router.get('/', controller.getAll);
router.get('/:id', controller.getByID);
router.post('/', controller.create);
router.put('/:id', controller.edit);
router.delete('/:id', controller.exclude);
exports.default = router;
