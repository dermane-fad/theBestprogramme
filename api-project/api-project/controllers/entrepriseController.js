const Entreprise = require('../models/entreprise');

// Créer une entreprise
exports.createEntreprise = (req, res) => {
  Entreprise.create(req.body, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "Entreprise créée avec succès." });
  });
};

// Lister toutes les entreprises
exports.getAllEntreprises = (req, res) => {
  Entreprise.getAll((err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
};

// Obtenir une entreprise par ID
exports.getEntrepriseById = (req, res) => {
  Entreprise.getById(req.params.id, (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ message: "Entreprise non trouvée." });
    res.json(row);
  });
};

// Mettre à jour une entreprise
exports.updateEntreprise = (req, res) => {
  Entreprise.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Entreprise mise à jour." });
  });
};

// Supprimer une entreprise
exports.deleteEntreprise = (req, res) => {
  Entreprise.delete(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Entreprise supprimée." });
  });
};

// Obtenir les employés d'une entreprise
exports.getEmployeesByEntrepriseId = (req, res) => {
  const entrepriseId = req.params.id;
  Entreprise.getEmployeesByEntrepriseId(entrepriseId, (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!rows.length) return res.status(404).json({ message: "Aucun employé trouvé." });
    res.json(rows);
  });
};
// Obtenir les boutiques d'une entreprise
exports.getBoutiquesByEntrepriseId = (req, res) => {
  const entrepriseId = req.params.id;
  Entreprise.getBoutiquesByEntrepriseId(entrepriseId, (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!rows.length) return res.status(404).json({ message: "Aucune boutique trouvée." });
    res.json(rows);
  });
};
// Obtenir les produits d'une entreprise
exports.getProductsByEntrepriseId = (req, res) => {
  const entrepriseId = req.params.id;
  Entreprise.getProductsByEntrepriseId(entrepriseId, (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!rows.length) return res.status(404).json({ message: "Aucun produit trouvé." });
    res.json(rows);
  });
};
// Obtenir les commandes d'une entreprise
exports.getCommandesByEntrepriseId = (req, res) => {
  const entrepriseId = req.params.id;
  Entreprise.getCommandesByEntrepriseId(entrepriseId, (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!rows.length) return res.status(404).json({ message: "Aucune commande trouvée." });
    res.json(rows);
  });
};
// Obtenir les clients d'une entreprise
exports.getClientsByEntrepriseId = (req, res) => {
  const entrepriseId = req.params.id;
  Entreprise.getClientsByEntrepriseId(entrepriseId, (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!rows.length) return res.status(404).json({ message: "Aucun client trouvé." });
    res.json(rows);
  });
};
// Obtenir les lignes de commande d'une entreprise
exports.getLignesCommandeByEntrepriseId = (req, res) => {
  const entrepriseId = req.params.id;
  Entreprise.getLignesCommandeByEntrepriseId(entrepriseId, (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!rows.length) return res.status(404).json({ message: "Aucune ligne de commande trouvée." });
    res.json(rows);
  });
};
// Obtenir les catégories d'une entreprise
exports.getCategoriesByEntrepriseId = (req, res) => {
  const entrepriseId = req.params.id;
  Entreprise.getCategoriesByEntrepriseId(entrepriseId, (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!rows.length) return res.status(404).json({ message: "Aucune catégorie trouvée." });
    res.json(rows);
  });
};

// Obtenir les employés d'une boutique
exports.getEmployeesByBoutiqueId = (req, res) => {
  const boutiqueId = req.params.id;
  Entreprise.getEmployeesByBoutiqueId(boutiqueId, (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!rows.length) return res.status(404).json({ message: "Aucun employé trouvé." });
    res.json(rows);
  });
};
// Obtenir les produits d'une boutique
exports.getProductsByBoutiqueId = (req, res) => {
  const boutiqueId = req.params.id;
  Entreprise.getProductsByBoutiqueId(boutiqueId, (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!rows.length) return res.status(404).json({ message: "Aucun produit trouvé." });
    res.json(rows);
  });
};