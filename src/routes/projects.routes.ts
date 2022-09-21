import express from 'express';
import ProjectController from '../controllers/projects.controller';
import ProjectService from '../services/projects.service';

const router = express.Router();
const service = new ProjectService();
const controller = new ProjectController(service); 

router.get('/', controller.getAll);
router.get('/:id', controller.getByID);
router.post('/', controller.create);
router.put('/:id', controller.edit);
router.delete('/:id', controller.exclude);

export default router;
