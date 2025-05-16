import express from 'express';
import commandeController from '../controllers/commandeController.js';

const router = express.Router();

// Créer une commande
router.post('/', commandeController.createCommande);

// Récupérer toutes les commandes
router.get('/', commandeController.getAllCommandes);

// Récupérer une commande par ID
router.get('/:id', commandeController.getCommandeById);

// Mettre à jour une commande
router.put('/:id', commandeController.updateCommande);

// Supprimer une commande
router.delete('/:id', commandeController.deleteCommande);

export default router;