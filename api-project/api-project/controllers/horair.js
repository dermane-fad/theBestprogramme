import Horaire from '../models/horair.js';

export const createHoraire = (req, res) => {
  Horaire.create(req.body, (err) => {
    if (err) return res.status(500).json({ error: 'Erreur lors de la création.' });
    res.status(201).json({ message: 'Horaire ajouté avec succès.' });
  });
};

export const getAllHoraires = (req, res) => {
  Horaire.getAll((err, rows) => {
    if (err) return res.status(500).json({ error: 'Erreur lors de la récupération.' });
    res.status(200).json(rows);
  });
};

export const getHoraireById = (req, res) => {
  const id = req.params.id;
  Horaire.getById(id, (err, row) => {
    if (err) return res.status(500).json({ error: 'Erreur lors de la récupération.' });
    if (!row) return res.status(404).json({ error: 'Horaire non trouvé.' });
    res.status(200).json(row);
  });
};

export const updateHoraire = (req, res) => {
  const id = req.params.id;
  Horaire.update(id, req.body, (err) => {
    if (err) return res.status(500).json({ error: 'Erreur lors de la mise à jour.' });
    res.status(200).json({ message: 'Horaire mis à jour avec succès.' });
  });
};

export const deleteHoraire = (req, res) => {
  const id = req.params.id;
  Horaire.delete(id, (err) => {
    if (err) return res.status(500).json({ error: 'Erreur lors de la suppression.' });
    res.status(200).json({ message: 'Horaire supprimé avec succès.' });
  });
};

// Exporter les fonctions pour les utiliser dans le routeur 
export default {
  createHoraire,
  getAllHoraires,
  getHoraireById,
  updateHoraire,
  deleteHoraire
};