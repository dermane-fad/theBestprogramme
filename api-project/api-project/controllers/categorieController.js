import Categorie from '../models/categorie.js';

export const createCategorie = (req, res) => {
  Categorie.create(req.body, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "Catégorie créée avec succès." });
  });
};

export const getAllCategories = (req, res) => {
  Categorie.getAll((err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
};

export const getCategorieById = (req, res) => {
  Categorie.getById(req.params.id, (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ message: "Catégorie non trouvée" });
    res.json(row);
  });
};

export const updateCategorie = (req, res) => {
  Categorie.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Catégorie mise à jour." });
  });
};

export const deleteCategorie = (req, res) => {
  Categorie.delete(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Catégorie supprimée." });
  });
};

export default {
  createCategorie,
  getAllCategories,
  getCategorieById,
  updateCategorie,
  deleteCategorie
};