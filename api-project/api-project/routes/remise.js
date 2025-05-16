import express from 'express';
import remiseController from '../controllers/remiseController.js';

const router = express.Router();

// Créer une remise
router.post('/', remiseController.createRemise);

// Récupérer toutes les remises
router.get('/', remiseController.getAllRemises);

// Récupérer une remise par ID
router.get('/:id', remiseController.getRemiseById);

// Mettre à jour une remise
router.put('/:id', remiseController.updateRemise);

// Supprimer une remise
router.delete('/:id', remiseController.deleteRemise);

export default router;