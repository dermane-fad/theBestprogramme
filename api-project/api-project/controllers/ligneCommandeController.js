import LigneCommande from '../models/ligneCommande.js';

export const createLigneCommande = (req, res) => {
  LigneCommande.create(req.body, (err) => {
    if (err) return res.status(500).send(err.message);
    res.status(201).send('Ligne de commande ajoutée avec succès');
  });
};

export const getAllLigneCommandes = (req, res) => {
  LigneCommande.getAll((err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
};

export const getLigneCommandeById = (req, res) => {
  LigneCommande.getById(req.params.id, (err, row) => {
    if (err) return res.status(500).send(err.message);
    if (!row) return res.status(404).send('Ligne non trouvée');
    res.json(row);
  });
};

export const updateLigneCommande = (req, res) => {
  LigneCommande.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).send(err.message);
    res.send('Ligne mise à jour avec succès');
  });
};

export const deleteLigneCommande = (req, res) => {
  LigneCommande.delete(req.params.id, (err) => {
    if (err) return res.status(500).send(err.message);
    res.send('Ligne supprimée avec succès');
  });
};

export const getLigneCommandeByCommandeId = (req, res) => {
  LigneCommande.getByCommandeId(req.params.commandeId, (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
};

export const getLigneCommandeByProduitId = (req, res) => {
  LigneCommande.getByProduitId(req.params.produitId, (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
};

export default {
  createLigneCommande,
  getAllLigneCommandes,
  getLigneCommandeById,
  updateLigneCommande,
  deleteLigneCommande,
  getLigneCommandeByCommandeId,
  getLigneCommandeByProduitId
};