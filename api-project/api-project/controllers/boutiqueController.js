const Boutique = require('../models/boutique');

// Créer une boutique
exports.createBoutique = (req, res) => {
  Boutique.create(req.body, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "Boutique créée avec succès." });
  });
};

// Lister toutes les boutiques
exports.getAllBoutiques = (req, res) => {
  Boutique.getAll((err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
};

// Obtenir une boutique par ID
exports.getBoutiqueById = (req, res) => {
  Boutique.getById(req.params.id, (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ message: "Boutique non trouvée." });
    res.json(row);
  });
};

// Modifier une boutique
exports.updateBoutique = (req, res) => {
  Boutique.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Boutique mise à jour." });
  });
};

// Supprimer une boutique
exports.deleteBoutique = (req, res) => {
  Boutique.delete(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Boutique supprimée." });
  });
};
// Obtenir les produits d'une boutique
exports.getProductsByBoutiqueId = (req, res) => {
  const boutiqueId = req.params.id;
  Boutique.getProductsByBoutiqueId(boutiqueId, (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!rows.length) return res.status(404).json({ message: "Aucun produit trouvé." });
    res.json(rows);
  });
};
// Obtenir les employés d'une boutique
exports.getEmployeesByBoutiqueId = (req, res) => {
  const boutiqueId = req.params.id;
  Boutique.getEmployeesByBoutiqueId(boutiqueId, (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!rows.length) return res.status(404).json({ message: "Aucun employé trouvé." });
    res.json(rows);
  });
};
