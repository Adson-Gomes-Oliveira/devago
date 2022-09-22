import express from 'express';
import CategoryController from '../controllers/categories.controller';
import CategoryService from '../services/categories.service';

const router = express.Router();
const service = new CategoryService();
const controller = new CategoryController(service);

router.get('/', controller.getAll);

export default router;
