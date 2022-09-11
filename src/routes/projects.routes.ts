import express from 'express';
import projectsController from '../controllers/projects.controller';

const router = express.Router();

router.get('/', projectsController.getAll);
router.post('/', projectsController.create);
router.put('/:id', projectsController.edit);
router.delete('/:id', projectsController.exclude);

export default router;
