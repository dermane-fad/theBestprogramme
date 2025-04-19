const Produit = require('../models/produit');

exports.createProduit = (req, res) => {
  Produit.create(req.body, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "Produit créé avec succès." });
  });
};

exports.getAllProduits = (req, res) => {
  Produit.getAll((err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
};

exports.getProduitById = (req, res) => {
  Produit.getById(req.params.id, (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ message: "Produit non trouvé." });
    res.json(row);
  });
};

exports.updateProduit = (req, res) => {
  Produit.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Produit mis à jour." });
  });
};

exports.deleteProduit = (req, res) => {
  Produit.delete(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Produit supprimé." });
  });
};
