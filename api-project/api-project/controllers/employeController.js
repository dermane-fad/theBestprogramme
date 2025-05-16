import Employe from '../models/employe.js';

const employeController = {
  createEmploye: (req, res) => {
    Employe.create(req.body, (err) => {
      if (err) {
        return res.status(500).json({ error: 'Erreur lors de la création de l\'employé.' });
      }
      res.status(201).json({ message: 'Employé créé avec succès.' });
    });
  },

  getAllEmployes: (req, res) => {
    Employe.getAll((err, employes) => {
      if (err) {
        return res.status(500).json({ error: 'Erreur lors de la récupération des employés.' });
      }
      res.json(employes);
    });
  },

  getEmployeById: (req, res) => {
    const id = req.params.id;
    Employe.getById(id, (err, employe) => {
      if (err || !employe) {
        return res.status(404).json({ error: 'Employé non trouvé.' });
      }
      res.json(employe);
    });
  },

  updateEmploye: (req, res) => {
    const id = req.params.id;
    Employe.update(id, req.body, (err) => {
      if (err) {
        return res.status(500).json({ error: 'Erreur lors de la mise à jour de l\'employé.' });
      }
      res.json({ message: 'Employé mis à jour avec succès.' });
    });
  },

  deleteEmploye: (req, res) => {
    const id = req.params.id;
    Employe.delete(id, (err) => {
      if (err) {
        return res.status(500).json({ error: 'Erreur lors de la suppression de l\'employé.' });
      }
      res.json({ message: 'Employé supprimé avec succès.' });
    });
  }
};

export default employeController;