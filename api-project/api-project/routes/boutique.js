import express from 'express';
import boutiqueController from '../controllers/boutiqueController.js';

const router = express.Router();
router.post('/', boutiqueController.createBoutique);
router.get('/', boutiqueController.getAllBoutiques);
router.get('/:id', boutiqueController.getBoutiqueById);
router.put('/:id', boutiqueController.updateBoutique);
router.delete('/:id', boutiqueController.deleteBoutique);

export default router;
