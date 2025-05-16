import express from 'express';
import ligneCommandeController from '../controllers/ligneCommandeController.js';

const router = express.Router();

// Créer une ligne de commande
router.post('/', ligneCommandeController.createLigneCommande);

// Récupérer toutes les lignes de commande
router.get('/', ligneCommandeController.getAllLigneCommandes);

// Récupérer une ligne de commande par ID
router.get('/:id', ligneCommandeController.getLigneCommandeById);

// Mettre à jour une ligne de commande
router.put('/:id', ligneCommandeController.updateLigneCommande);

// Supprimer une ligne de commande
router.delete('/:id', ligneCommandeController.deleteLigneCommande);

export default router;