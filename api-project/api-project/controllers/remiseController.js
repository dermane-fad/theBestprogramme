import Remise from '../models/remise.js';

export const createRemise = (req, res) => {
  Remise.create(req.body, (err) => {
    if (err) return res.status(500).send(err.message);
    res.status(201).send('Remise ajoutée avec succès');
  });
};

export const getAllRemises = (req, res) => {
  Remise.getAll((err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
};

export const getRemiseById = (req, res) => {
  Remise.getById(req.params.id, (err, row) => {
    if (err) return res.status(500).send(err.message);
    if (!row) return res.status(404).send('Remise non trouvée');
    res.json(row);
  });
};

export const updateRemise = (req, res) => {
  Remise.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).send(err.message);
    res.send('Remise mise à jour avec succès');
  });
};

export const deleteRemise = (req, res) => {
  Remise.delete(req.params.id, (err) => {
    if (err) return res.status(500).send(err.message);
    res.send('Remise supprimée avec succès');
  });
};

export const getRemisesByClientId = (req, res) => {
  Remise.getByClientId(req.params.clientId, (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
};

export const getRemisesByDate = (req, res) => {
  const { startDate, endDate } = req.query;
  Remise.getByDate(startDate, endDate, (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
};

export const getRemisesByMontant = (req, res) => {
  const { minMontant, maxMontant } = req.query;
  Remise.getByMontant(minMontant, maxMontant, (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
};

export const getRemisesByClientIdAndDate = (req, res) => {
  const { clientId } = req.params;
  const { startDate, endDate } = req.query;
  Remise.getByClientIdAndDate(clientId, startDate, endDate, (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
};

export const getRemisesByProduitId = (req, res) => {
  Remise.getByProduitId(req.params.produitId, (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
};

export default {
  createRemise,
  getAllRemises,
  getRemiseById,
  updateRemise,
  deleteRemise,
  getRemisesByClientId,
  getRemisesByDate,
  getRemisesByMontant,
  getRemisesByClientIdAndDate,
  getRemisesByProduitId
};