import express from 'express';
import categoriesController from '../controllers/categories.controller';

const router = express.Router();

router.get('/', categoriesController.getAll);
router.post('/', categoriesController.create);
router.put('/:id', categoriesController.edit);
router.delete('/:id', categoriesController.exclude);

export default router;
