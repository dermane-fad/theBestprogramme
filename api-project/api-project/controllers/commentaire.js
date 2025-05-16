const Commentaire = require('../models/commentaire');

const commentaireController = {
  // Créer un nouveau commentaire
  createCommentaire: async (req, res) => {
    try {
      const commentaireData = req.body;
      Commentaire.create(commentaireData, function(err) {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Commentaire créé avec succès' });
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Obtenir tous les commentaires
  getAllCommentaires: async (req, res) => {
    try {
      Commentaire.getAll(function(err, commentaires) {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        res.status(200).json(commentaires);
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Obtenir un commentaire par ID
  getCommentaireById: async (req, res) => {
    try {
      const { id } = req.params;
      Commentaire.getById(id, function(err, commentaire) {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        if (!commentaire) {
          return res.status(404).json({ message: 'Commentaire non trouvé' });
        }
        res.status(200).json(commentaire);
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Obtenir les commentaires d'une commande
  getCommentairesByCommandeId: async (req, res) => {
    try {
      const { commande_id } = req.params;
      Commentaire.getByCommandeId(commande_id, function(err, commentaires) {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        res.status(200).json(commentaires);
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Mettre à jour un commentaire
  updateCommentaire: async (req, res) => {
    try {
      const { id } = req.params;
      const updateData = req.body;
      Commentaire.update(id, updateData, function(err) {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ message: 'Commentaire mis à jour avec succès' });
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Supprimer un commentaire
  deleteCommentaire: async (req, res) => {
    try {
      const { id } = req.params;
      Commentaire.delete(id, function(err) {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ message: 'Commentaire supprimé avec succès' });
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = commentaireController;