const express = require('express');
const router = express.Router();
const personneController = require('../controllers/personne'); // Assurez-vous que le chemin est correct

// Routes
router.get('/', personneController.getAll); // Vérifiez que `getAll` est une fonction
router.get('/:id', personneController.getUserById); // Vérifiez que `getUserById` est une fonction
router.post('/', personneController.register); // Vérifiez que `register` est une fonction
router.put('/profile', personneController.updateProfile); // Vérifiez que `updateProfile` est une fonction
router.put('/password', personneController.changePassword); // Vérifiez que `changePassword` est une fonction
router.delete('/:id', personneController.delete); // Vérifiez que `delete` est une fonction

module.exports = router;