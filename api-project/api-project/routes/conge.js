import express from 'express';
const router = express.Router();
import congeController from '../controllers/congeController.js';

router.post('/', congeController.create);
router.get('/', congeController.getAll);
router.get('/:id', congeController.getById);
router.get('/employe/:employeId', congeController.getByEmployeId);
router.put('/:id', congeController.update);
router.delete('/:id', congeController.delete);

export default router;