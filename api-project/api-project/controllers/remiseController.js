const Remise = require('../models/remise');

exports.createRemise = (req, res) => {
  Remise.create(req.body, (err) => {
    if (err) return res.status(500).send(err.message);
    res.status(201).send('Remise ajoutée avec succès');
  });
};

exports.getAllRemises = (req, res) => {
  Remise.getAll((err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
};

exports.getRemiseById = (req, res) => {
  Remise.getById(req.params.id, (err, row) => {
    if (err) return res.status(500).send(err.message);
    if (!row) return res.status(404).send('Remise non trouvée');
    res.json(row);
  });
};

exports.updateRemise = (req, res) => {
  Remise.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).send(err.message);
    res.send('Remise mise à jour avec succès');
  });
};

exports.deleteRemise = (req, res) => {
  Remise.delete(req.params.id, (err) => {
    if (err) return res.status(500).send(err.message);
    res.send('Remise supprimée avec succès');
  });
};
exports.getRemisesByClientId = (req, res) => {
  Remise.getByClientId(req.params.clientId, (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
};
exports.getRemisesByDate = (req, res) => {
  const { startDate, endDate } = req.query;
  Remise.getByDate(startDate, endDate, (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
};
exports.getRemisesByMontant = (req, res) => {
  const { minMontant, maxMontant } = req.query;
  Remise.getByMontant(minMontant, maxMontant, (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
};
exports.getRemisesByClientIdAndDate = (req, res) => {
  const { clientId } = req.params;
  const { startDate, endDate } = req.query;
  Remise.getByClientIdAndDate(clientId, startDate, endDate, (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
};
exports.getRemisesByProduitId = (req, res) => {
  Remise.getByProduitId(req.params.produitId, (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
};