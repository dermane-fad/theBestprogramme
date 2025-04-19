const Categorie = require('../models/categorie');

exports.createCategorie = (req, res) => {
  Categorie.create(req.body, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "Catégorie créée avec succès." });
  });
};

exports.getAllCategories = (req, res) => {
  Categorie.getAll((err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
};

exports.getCategorieById = (req, res) => {
  Categorie.getById(req.params.id, (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ message: "Catégorie non trouvée" });
    res.json(row);
  });
};

exports.updateCategorie = (req, res) => {
  Categorie.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Catégorie mise à jour." });
  });
};

exports.deleteCategorie = (req, res) => {
  Categorie.delete(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Catégorie supprimée." });
  });
};
