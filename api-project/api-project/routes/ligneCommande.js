// Fichier : routes/ligneCommande.js
const express = require('express');
const router = express.Router();
const LigneCommande = require('../models/ligneCommande');

router.post('/', (req, res) => {
  LigneCommande.create(req.body, (err) => {
    if (err) res.status(500).send(err);
    else res.send('Ligne de commande ajoutée');
  });
});

router.get('/', (req, res) => {
  LigneCommande.getAll((err, rows) => {
    if (err) res.status(500).send(err);
    else res.json(rows);
  });
});

router.get('/:id', (req, res) => {
  LigneCommande.getById(req.params.id, (err, row) => {
    if (err) res.status(500).send(err);
    else res.json(row);
  });
});

router.put('/:id', (req, res) => {
  LigneCommande.update(req.params.id, req.body, (err) => {
    if (err) res.status(500).send(err);
    else res.send('Ligne de commande mise à jour');
  });
});

router.delete('/:id', (req, res) => {
  LigneCommande.delete(req.params.id, (err) => {
    if (err) res.status(500).send(err);
    else res.send('Ligne de commande supprimée');
  });
});

module.exports = router;
