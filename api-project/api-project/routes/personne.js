import express from 'express';
import personneController from '../controllers/personne.js';

const router = express.Router();

// Routes
router.get('/', personneController.getAll);
router.get('/:id', personneController.getUserById);
router.post('/', personneController.register);
router.put('/profile', personneController.updateProfile);
router.put('/password', personneController.changePassword);
router.delete('/:id', personneController.delete);

export default router;