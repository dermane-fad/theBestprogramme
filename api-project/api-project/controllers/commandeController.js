const Commande = require('../models/commande');

exports.createCommande = (req, res) => {
  Commande.create(req.body, (err) => {
    if (err) return res.status(500).send(err.message);
    res.status(201).send('Commande ajoutée avec succès');
  });
};

exports.getAllCommandes = (req, res) => {
  Commande.getAll((err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
};

exports.getCommandeById = (req, res) => {
  Commande.getById(req.params.id, (err, row) => {
    if (err) return res.status(500).send(err.message);
    if (!row) return res.status(404).send('Commande non trouvée');
    res.json(row);
  });
};

exports.updateCommande = (req, res) => {
  Commande.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).send(err.message);
    res.send('Commande mise à jour avec succès');
  });
};

exports.deleteCommande = (req, res) => {
  Commande.delete(req.params.id, (err) => {
    if (err) return res.status(500).send(err.message);
    res.send('Commande supprimée avec succès');
  });
};

exports.getCommandesByClientId = (req, res) => {
  Commande.getByClientId(req.params.clientId, (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
};
exports.getCommandesByDate = (req, res) => {
  const { startDate, endDate } = req.query;
  Commande.getByDate(startDate, endDate, (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
};
exports.getCommandesByMontant = (req, res) => {
  const { minMontant, maxMontant } = req.query;
  Commande.getByMontant(minMontant, maxMontant, (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
};
exports.getCommandesByClientIdAndDate = (req, res) => {
  const { clientId } = req.params;
  const { startDate, endDate } = req.query;
  Commande.getByClientIdAndDate(clientId, startDate, endDate, (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
};
exports.getCommandesByClientIdAndMontant = (req, res) => {
  const { clientId } = req.params;
  const { minMontant, maxMontant } = req.query;
  Commande.getByClientIdAndMontant(clientId, minMontant, maxMontant, (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
};
exports.getCommandesByDateAndMontant = (req, res) => {
  const { startDate, endDate } = req.query;
  const { minMontant, maxMontant } = req.query;
  Commande.getByDateAndMontant(startDate, endDate, minMontant, maxMontant, (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
};