import express from 'express';
const router = express.Router();
import produitController from '../controllers/produitController.js';

router.post('/', produitController.createProduit);
router.get('/', produitController.getAllProduits);
router.get('/:id', produitController.getProduitById);
router.put('/:id', produitController.updateProduit);
router.delete('/:id', produitController.deleteProduit);

export default router;