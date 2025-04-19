const Paiement = require('../models/paiement');

const PaiementController = {
  create: (req, res) => {
    Paiement.create(req.body, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Erreur lors de l’ajout du paiement.' });
      }
      res.status(201).json({ message: 'Paiement ajouté avec succès.' });
    });
  },

  getAll: (req, res) => {
    Paiement.getAll((err, paiements) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Erreur lors de la récupération des paiements.' });
      }
      res.json(paiements);
    });
  },

  getById: (req, res) => {
    Paiement.getById(req.params.id, (err, paiement) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Erreur lors de la récupération du paiement.' });
      }
      if (!paiement) return res.status(404).json({ error: 'Paiement non trouvé.' });
      res.json(paiement);
    });
  },

  update: (req, res) => {
    Paiement.update(req.params.id, req.body, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Erreur lors de la mise à jour du paiement.' });
      }
      res.json({ message: 'Paiement mis à jour avec succès.' });
    });
  },

  delete: (req, res) => {
    Paiement.delete(req.params.id, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Erreur lors de la suppression du paiement.' });
      }
      res.json({ message: 'Paiement supprimé avec succès.' });
    });
  }
};

module.exports = PaiementController;
