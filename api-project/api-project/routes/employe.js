const express = require('express');
const router = express.Router();
const Employe = require('../models/employe');

// Créer un employé
router.post('/', (req, res) => {
  Employe.create(req.body, (err) => {
    if (err) {
      return res.status(500).json({ error: 'Erreur lors de la création de l\'employé.' });
    }
    res.status(201).json({ message: 'Employé créé avec succès.' });
  });
});

// Récupérer tous les employés
router.get('/', (req, res) => {
  Employe.getAll((err, employes) => {
    if (err) {
      return res.status(500).json({ error: 'Erreur lors de la récupération des employés.' });
    }
    res.json(employes);
  });
});

// Récupérer un employé par ID
router.get('/:id', (req, res) => {
  Employe.getById(req.params.id, (err, employe) => {
    if (err || !employe) {
      return res.status(404).json({ error: 'Employé non trouvé.' });
    }
    res.json(employe);
  });
});

// Mettre à jour un employé
router.put('/:id', (req, res) => {
  Employe.update(req.params.id, req.body, (err) => {
    if (err) {
      return res.status(500).json({ error: 'Erreur lors de la mise à jour de l\'employé.' });
    }
    res.json({ message: 'Employé mis à jour avec succès.' });
  });
});

// Supprimer un employé
router.delete('/:id', (req, res) => {
  Employe.delete(req.params.id, (err) => {
    if (err) {
      return res.status(500).json({ error: 'Erreur lors de la suppression de l\'employé.' });
    }
    res.json({ message: 'Employé supprimé avec succès.' });
  });
});

module.exports = router;
