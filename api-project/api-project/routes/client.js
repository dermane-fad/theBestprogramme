import express from 'express';
import clientController from '../controllers/clientController.js';

const router = express.Router();

// Créer un client
router.post('/', clientController.createClient);

// Récupérer tous les clients
router.get('/', clientController.getAllClients);

// Récupérer un client par ID
router.get('/:id', clientController.getClientById);

// Mettre à jour un client
router.put('/:id', clientController.updateClient);

// Supprimer un client
router.delete('/:id', clientController.deleteClient);

export default router;