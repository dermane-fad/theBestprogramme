const express = require('express');
const router = express.Router();
const Client = require('../models/client');

// Créer un client
router.post('/', (req, res) => {
  Client.create(req.body, (err) => {
    if (err) {
      return res.status(500).json({ error: 'Erreur lors de la création du client.' });
    }
    res.status(201).json({ message: 'Client créé avec succès.' });
  });
});

// Récupérer tous les clients
router.get('/', (req, res) => {
  Client.getAll((err, clients) => {
    if (err) {
      return res.status(500).json({ error: 'Erreur lors de la récupération des clients.' });
    }
    res.json(clients);
  });
});

// Récupérer un client par ID
router.get('/:id', (req, res) => {
  Client.getById(req.params.id, (err, client) => {
    if (err || !client) {
      return res.status(404).json({ error: 'Client non trouvé.' });
    }
    res.json(client);
  });
});

// Mettre à jour un client
router.put('/:id', (req, res) => {
  Client.update(req.params.id, req.body, (err) => {
    if (err) {
      return res.status(500).json({ error: 'Erreur lors de la mise à jour du client.' });
    }
    res.json({ message: 'Client mis à jour avec succès.' });
  });
});

// Supprimer un client
router.delete('/:id', (req, res) => {
  Client.delete(req.params.id, (err) => {
    if (err) {
      return res.status(500).json({ error: 'Erreur lors de la suppression du client.' });
    }
    res.json({ message: 'Client supprimé avec succès.' });
  });
});

module.exports = router;
