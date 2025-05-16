import express from 'express';
import horaireController from '../controllers/horair.js';
const router = express.Router();


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

export default router;