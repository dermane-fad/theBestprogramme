import Restaurant from '../models/restaurant.js';

export const create = (req, res) => {
  Restaurant.create(req.body, function (err) {
    if (err) return res.status(500).json({ message: 'Erreur lors de la création' });
    res.status(201).json({ message: 'Restaurant créé avec succès' });
  });
};

export const getAll = (req, res) => {
  Restaurant.getAll((err, rows) => {
    if (err) return res.status(500).json({ message: 'Erreur lors de la récupération' });
    res.json(rows);
  });
};

export const getById = (req, res) => {
  Restaurant.getById(req.params.id, (err, row) => {
    if (err) return res.status(500).json({ message: 'Erreur lors de la récupération' });
    res.json(row);
  });
};

export const update = (req, res) => {
  Restaurant.update(req.params.id, req.body, function (err) {
    if (err) return res.status(500).json({ message: 'Erreur lors de la mise à jour' });
    res.json({ message: 'Restaurant mis à jour avec succès' });
  });
};

export const deleteRestaurant = (req, res) => {
  Restaurant.delete(req.params.id, function (err) {
    if (err) return res.status(500).json({ message: 'Erreur lors de la suppression' });
    res.json({ message: 'Restaurant supprimé avec succès' });
  });
};

// Exporter les fonctions pour les utiliser dans le routeur
export default {
  create,
  getAll,
  getById,
  update,
  deleteRestaurant
};