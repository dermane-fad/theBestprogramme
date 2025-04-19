// Fichier : routes/remise.js
const express = require('express');
const router = express.Router();
const Remise = require('../models/remise');

router.post('/', (req, res) => {
  Remise.create(req.body, (err) => {
    if (err) res.status(500).send(err);
    else res.send('Remise ajoutée');
  });
});

router.get('/', (req, res) => {
  Remise.getAll((err, rows) => {
    if (err) res.status(500).send(err);
    else res.json(rows);
  });
});

router.get('/:id', (req, res) => {
  Remise.getById(req.params.id, (err, row) => {
    if (err) res.status(500).send(err);
    else res.json(row);
  });
});

router.put('/:id', (req, res) => {
  Remise.update(req.params.id, req.body, (err) => {
    if (err) res.status(500).send(err);
    else res.send('Remise mise à jour');
  });
});

router.delete('/:id', (req, res) => {
  Remise.delete(req.params.id, (err) => {
    if (err) res.status(500).send(err);
    else res.send('Remise supprimée');
  });
});

module.exports = router;
