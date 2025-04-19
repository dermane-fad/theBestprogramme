const express = require('express');
const router = express.Router();
const Commande = require('../models/commande');

router.post('/', (req, res) => {
  Commande.create(req.body, function (err) {
    if (err) res.status(500).send(err);
    else res.send('Commande ajoutée');
  });
});

router.get('/', (req, res) => {
  Commande.getAll((err, rows) => {
    if (err) res.status(500).send(err);
    else res.json(rows);
  });
});

router.get('/:id', (req, res) => {
  Commande.getById(req.params.id, (err, row) => {
    if (err) res.status(500).send(err);
    else res.json(row);
  });
});

router.put('/:id', (req, res) => {
  Commande.update(req.params.id, req.body, (err) => {
    if (err) res.status(500).send(err);
    else res.send('Commande mise à jour');
  });
});

router.delete('/:id', (req, res) => {
  Commande.delete(req.params.id, (err) => {
    if (err) res.status(500).send(err);
    else res.send('Commande supprimée');
  });
});



module.exports = router;