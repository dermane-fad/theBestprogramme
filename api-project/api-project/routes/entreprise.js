import express from 'express';
import entrepriseController from '../controllers/entrepriseController.js';

const router = express.Router();

router.post('/', entrepriseController.createEntreprise);
router.get('/', entrepriseController.getAllEntreprises);
router.get('/:id', entrepriseController.getEntrepriseById);
router.put('/:id', entrepriseController.updateEntreprise);
router.delete('/:id', entrepriseController.deleteEntreprise);

export default router;