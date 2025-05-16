import express from 'express';
import PaiementController from '../controllers/paiementController.js';
const router = express.Router();

router.post('/', PaiementController.create);
router.get('/', PaiementController.getAll);
router.get('/:id', PaiementController.getById);
router.put('/:id', PaiementController.update);
router.delete('/:id', PaiementController.delete);

export default router;