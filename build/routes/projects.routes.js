"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const projects_controller_1 = __importDefault(require("../controllers/projects.controller"));
const router = express_1.default.Router();
const controller = new projects_controller_1.default();
router.get('/', controller.getAll);
// router.post('/', controller.create);
// router.put('/:id', controller.editAll);
// router.delete('/:id', controller.exclude);
exports.default = router;
