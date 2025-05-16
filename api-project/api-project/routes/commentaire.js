const express = require('express');
const router = express.Router();
const commentaireController = require('../controllers/commentaire');

// Routes pour les commentaires
router.post('/', commentaireController.createCommentaire);
router.get('/', commentaireController.getAllCommentaires);
router.get('/:id', commentaireController.getCommentaireById);
router.get('/commande/:commande_id', commentaireController.getCommentairesByCommandeId);
router.put('/:id', commentaireController.updateCommentaire);
router.delete('/:id', commentaireController.deleteCommentaire);

module.exports = router;