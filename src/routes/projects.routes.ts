import express from 'express';
import ProjectController from '../controllers/projects.controller';

const router = express.Router();
const controller = new ProjectController(); 

router.get('/', controller.getAll);
// router.post('/', controller.create);
// router.put('/:id', controller.editAll);
// router.delete('/:id', controller.exclude);

export default router;
