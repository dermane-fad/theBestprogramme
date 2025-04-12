const express = require('express');
const router = express.Router();
const Entreprise = require('../models/entreprise');

router.post('/', (req, res) => {
  Entreprise.create(req.body, (err) => {
    if (err) return res.status(500).json({ message: 'Erreur', err });
    res.status(201).json({ message: 'Entreprise créée avec succès' });
  });
});

router.get('/', (req, res) => {
  Entreprise.getAll((err, rows) => {
    if (err) return res.status(500).json({ message: 'Erreur', err });
    res.status(200).json(rows);
  });
});

module.exports = router;
