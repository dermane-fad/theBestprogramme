import Commande from '../models/commande.js';

export const createCommande = (req, res) => {
  Commande.create(req.body, (err) => {
    if (err) return res.status(500).send(err.message);
    res.status(201).send('Commande ajoutée avec succès');
  });
};

export const getAllCommandes = (req, res) => {
  Commande.getAll((err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
};

export const getCommandeById = (req, res) => {
  Commande.getById(req.params.id, (err, row) => {
    if (err) return res.status(500).send(err.message);
    if (!row) return res.status(404).send('Commande non trouvée');
    res.json(row);
  });
};

export const updateCommande = (req, res) => {
  Commande.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).send(err.message);
    res.send('Commande mise à jour avec succès');
  });
};

export const deleteCommande = (req, res) => {
  Commande.delete(req.params.id, (err) => {
    if (err) return res.status(500).send(err.message);
    res.send('Commande supprimée avec succès');
  });
};

export const getCommandesByClientId = (req, res) => {
  Commande.getByClientId(req.params.clientId, (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
};

export const getCommandesByDate = (req, res) => {
  const { startDate, endDate } = req.query;
  Commande.getByDate(startDate, endDate, (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
};

export const getCommandesByMontant = (req, res) => {
  const { minMontant, maxMontant } = req.query;
  Commande.getByMontant(minMontant, maxMontant, (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
};

export const getCommandesByClientIdAndDate = (req, res) => {
  const { clientId } = req.params;
  const { startDate, endDate } = req.query;
  Commande.getByClientIdAndDate(clientId, startDate, endDate, (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
};

export const getCommandesByClientIdAndMontant = (req, res) => {
  const { clientId } = req.params;
  const { minMontant, maxMontant } = req.query;
  Commande.getByClientIdAndMontant(clientId, minMontant, maxMontant, (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
};

export const getCommandesByDateAndMontant = (req, res) => {
  const { startDate, endDate } = req.query;
  const { minMontant, maxMontant } = req.query;
  Commande.getByDateAndMontant(startDate, endDate, minMontant, maxMontant, (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
};

export default {
  createCommande,
  getAllCommandes,
  getCommandeById,
  updateCommande,
  deleteCommande,
  getCommandesByClientId,
  getCommandesByDate,
  getCommandesByMontant,
  getCommandesByClientIdAndDate,
  getCommandesByClientIdAndMontant,
  getCommandesByDateAndMontant
};