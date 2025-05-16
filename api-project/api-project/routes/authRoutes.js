import express from 'express';
import authController from '../controllers/authController.js';

const router = express.Router();

// Route pour l'inscription
router.post('/register', authController.register);

// Route pour la connexion
router.post('/login', authController.login);

export default router;