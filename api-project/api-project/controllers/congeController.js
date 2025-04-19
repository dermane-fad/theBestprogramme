const Conge = require('../models/conge');

const congeController = {
  create: (req, res) => {
    Conge.create(req.body, (err) => {
      if (err) {
        res.status(500).json({ error: 'Erreur lors de l\'ajout du congé.' });
      } else {
        res.status(201).json({ message: 'Congé ajouté avec succès.' });
      }
    });
  },

  getAll: (req, res) => {
    Conge.getAll((err, conges) => {
      if (err) {
        res.status(500).json({ error: 'Erreur lors de la récupération des congés.' });
      } else {
        res.status(200).json(conges);
      }
    });
  },

  getById: (req, res) => {
    Conge.getById(req.params.id, (err, conge) => {
      if (err || !conge) {
        res.status(404).json({ error: 'Congé non trouvé.' });
      } else {
        res.status(200).json(conge);
      }
    });
  },

  getByEmployeId: (req, res) => {
    Conge.getByEmployeId(req.params.employeId, (err, conges) => {
      if (err) {
        res.status(500).json({ error: 'Erreur lors de la récupération des congés de l\'employé.' });
      } else {
        res.status(200).json(conges);
      }
    });
  },

  update: (req, res) => {
    Conge.update(req.params.id, req.body, (err) => {
      if (err) {
        res.status(500).json({ error: 'Erreur lors de la mise à jour du congé.' });
      } else {
        res.status(200).json({ message: 'Congé mis à jour avec succès.' });
      }
    });
  },

  delete: (req, res) => {
    Conge.delete(req.params.id, (err) => {
      if (err) {
        res.status(500).json({ error: 'Erreur lors de la suppression du congé.' });
      } else {
        res.status(200).json({ message: 'Congé supprimé avec succès.' });
      }
    });
  }
};

module.exports = congeController;
