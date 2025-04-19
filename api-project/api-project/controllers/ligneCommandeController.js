const LigneCommande = require('../models/ligneCommande');

exports.createLigneCommande = (req, res) => {
  LigneCommande.create(req.body, (err) => {
    if (err) return res.status(500).send(err.message);
    res.status(201).send('Ligne de commande ajoutée avec succès');
  });
};

exports.getAllLigneCommandes = (req, res) => {
  LigneCommande.getAll((err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
};

exports.getLigneCommandeById = (req, res) => {
  LigneCommande.getById(req.params.id, (err, row) => {
    if (err) return res.status(500).send(err.message);
    if (!row) return res.status(404).send('Ligne non trouvée');
    res.json(row);
  });
};

exports.updateLigneCommande = (req, res) => {
  LigneCommande.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).send(err.message);
    res.send('Ligne mise à jour avec succès');
  });
};

exports.deleteLigneCommande = (req, res) => {
  LigneCommande.delete(req.params.id, (err) => {
    if (err) return res.status(500).send(err.message);
    res.send('Ligne supprimée avec succès');
  });
};
exports.getLigneCommandeByCommandeId = (req, res) => {
  LigneCommande.getByCommandeId(req.params.commandeId, (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
};

exports.getLigneCommandeByProduitId = (req, res) => {
  LigneCommande.getByProduitId(req.params.produitId, (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
};

