import Entreprise from '../models/entreprise.js';

// Contrôleur pour la gestion des entreprises et leurs entités associées
const entrepriseController = {
  // Créer une entreprise
  createEntreprise: (req, res) => {
    Entreprise.create(req.body, (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: "Entreprise créée avec succès." });
    });
  },

  // Récupérer toutes les entreprises
  getAllEntreprises: (req, res) => {
    Entreprise.getAll((err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(rows);
    });
  },

  // Récupérer une entreprise par ID
  getEntrepriseById: (req, res) => {
    Entreprise.getById(req.params.id, (err, row) => {
      if (err) return res.status(500).json({ error: err.message });
      if (!row) return res.status(404).json({ message: "Entreprise non trouvée." });
      res.json(row);
    });
  },

  // Mettre à jour une entreprise
  updateEntreprise: (req, res) => {
    Entreprise.update(req.params.id, req.body, (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: "Entreprise mise à jour." });
    });
  },

  // Supprimer une entreprise
  deleteEntreprise: (req, res) => {
    Entreprise.delete(req.params.id, (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: "Entreprise supprimée." });
    });
  },

  // Récupérer les employés d'une entreprise
  getEmployeesByEntrepriseId: (req, res) => {
    Entreprise.getEmployeesByEntrepriseId(req.params.id, (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      if (!rows || !rows.length) return res.status(404).json({ message: "Aucun employé trouvé." });
      res.json(rows);
    });
  },

  // Récupérer les boutiques d'une entreprise
  getBoutiquesByEntrepriseId: (req, res) => {
    Entreprise.getBoutiquesByEntrepriseId(req.params.id, (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      if (!rows || !rows.length) return res.status(404).json({ message: "Aucune boutique trouvée." });
      res.json(rows);
    });
  },

  // Récupérer les produits d'une entreprise
  getProductsByEntrepriseId: (req, res) => {
    Entreprise.getProductsByEntrepriseId(req.params.id, (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      if (!rows || !rows.length) return res.status(404).json({ message: "Aucun produit trouvé." });
      res.json(rows);
    });
  },

  // Récupérer les commandes d'une entreprise
  getCommandesByEntrepriseId: (req, res) => {
    Entreprise.getCommandesByEntrepriseId(req.params.id, (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      if (!rows || !rows.length) return res.status(404).json({ message: "Aucune commande trouvée." });
      res.json(rows);
    });
  },

  // Récupérer les clients d'une entreprise
  getClientsByEntrepriseId: (req, res) => {
    Entreprise.getClientsByEntrepriseId(req.params.id, (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      if (!rows || !rows.length) return res.status(404).json({ message: "Aucun client trouvé." });
      res.json(rows);
    });
  },

  // Récupérer les lignes de commande d'une entreprise
  getLignesCommandeByEntrepriseId: (req, res) => {
    Entreprise.getLignesCommandeByEntrepriseId(req.params.id, (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      if (!rows || !rows.length) return res.status(404).json({ message: "Aucune ligne de commande trouvée." });
      res.json(rows);
    });
  },

  // Récupérer les catégories d'une entreprise
  getCategoriesByEntrepriseId: (req, res) => {
    Entreprise.getCategoriesByEntrepriseId(req.params.id, (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      if (!rows || !rows.length) return res.status(404).json({ message: "Aucune catégorie trouvée." });
      res.json(rows);
    });
  },

  // Récupérer les employés d'une boutique
  getEmployeesByBoutiqueId: (req, res) => {
    Entreprise.getEmployeesByBoutiqueId(req.params.id, (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      if (!rows || !rows.length) return res.status(404).json({ message: "Aucun employé trouvé." });
      res.json(rows);
    });
  },

  // Récupérer les produits d'une boutique
  getProductsByBoutiqueId: (req, res) => {
    Entreprise.getProductsByBoutiqueId(req.params.id, (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      if (!rows || !rows.length) return res.status(404).json({ message: "Aucun produit trouvé." });
      res.json(rows);
    });
  }
};

export default entrepriseController;