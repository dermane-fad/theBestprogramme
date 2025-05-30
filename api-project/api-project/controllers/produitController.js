import Produit from '../models/produit.js';

export const createProduit = (req, res) => {
  Produit.create(req.body, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "Produit créé avec succès." });
  });
};

export const getAllProduits = (req, res) => {
  Produit.getAll((err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
};

export const getProduitById = (req, res) => {
  Produit.getById(req.params.id, (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ message: "Produit non trouvé." });
    res.json(row);
  });
};

export const updateProduit = (req, res) => {
  Produit.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Produit mis à jour." });
  });
};

export const deleteProduit = (req, res) => {
  Produit.delete(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Produit supprimé." });
  });
};

// Exporter les fonctions pour les utiliser dans le routeur
export default {
  createProduit,
  getAllProduits,
  getProduitById,
  updateProduit,
  deleteProduit
};