const express = require('express');
const router = express.Router();
const horaireController = require('../controllers/horaire.controller');

// ➕ Ajouter un horaire
router.post('/', horaireController.createHoraire);

// 📄 Récupérer tous les horaires
router.get('/', horaireController.getAllHoraires);

// 🔍 Récupérer un horaire par ID
router.get('/:id', horaireController.getHoraireById);

// ✏️ Mettre à jour un horaire
router.put('/:id', horaireController.updateHoraire);

// ❌ Supprimer un horaire
router.delete('/:id', horaireController.deleteHoraire);

module.exports = router;
