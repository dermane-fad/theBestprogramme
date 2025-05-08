const Restaurant = require('../models/restaurant.model');

exports.create = (req, res) => {
  Restaurant.create(req.body, function (err) {
    if (err) return res.status(500).json({ message: 'Erreur lors de la création' });
    res.status(201).json({ message: 'Restaurant créé avec succès' });
  });
};

exports.getAll = (req, res) => {
  Restaurant.getAll((err, rows) => {
    if (err) return res.status(500).json({ message: 'Erreur lors de la récupération' });
    res.json(rows);
  });
};

exports.getById = (req, res) => {
  Restaurant.getById(req.params.id, (err, row) => {
    if (err) return res.status(500).json({ message: 'Erreur lors de la récupération' });
    res.json(row);
  });
};

exports.update = (req, res) => {
  Restaurant.update(req.params.id, req.body, function (err) {
    if (err) return res.status(500).json({ message: 'Erreur lors de la mise à jour' });
    res.json({ message: 'Restaurant mis à jour avec succès' });
  });
};

exports.delete = (req, res) => {
  Restaurant.delete(req.params.id, function (err) {
    if (err) return res.status(500).json({ message: 'Erreur lors de la suppression' });
    res.json({ message: 'Restaurant supprimé avec succès' });
  });
};
