const Horaire = require('../models/horaire.model');

exports.createHoraire = (req, res) => {
  Horaire.create(req.body, (err) => {
    if (err) return res.status(500).json({ error: 'Erreur lors de la création.' });
    res.status(201).json({ message: 'Horaire ajouté avec succès.' });
  });
};

exports.getAllHoraires = (req, res) => {
  Horaire.getAll((err, rows) => {
    if (err) return res.status(500).json({ error: 'Erreur lors de la récupération.' });
    res.status(200).json(rows);
  });
};

exports.getHoraireById = (req, res) => {
  const id = req.params.id;
  Horaire.getById(id, (err, row) => {
    if (err) return res.status(500).json({ error: 'Erreur lors de la récupération.' });
    if (!row) return res.status(404).json({ error: 'Horaire non trouvé.' });
    res.status(200).json(row);
  });
};

exports.updateHoraire = (req, res) => {
  const id = req.params.id;
  Horaire.update(id, req.body, (err) => {
    if (err) return res.status(500).json({ error: 'Erreur lors de la mise à jour.' });
    res.status(200).json({ message: 'Horaire mis à jour avec succès.' });
  });
};

exports.deleteHoraire = (req, res) => {
  const id = req.params.id;
  Horaire.delete(id, (err) => {
    if (err) return res.status(500).json({ error: 'Erreur lors de la suppression.' });
    res.status(200).json({ message: 'Horaire supprimé avec succès.' });
  });
};
