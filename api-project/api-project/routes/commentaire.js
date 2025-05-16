import express from 'express';
const router = express.Router();
import commentaireController from '../controllers/commentaire.js';

// Routes pour les commentaires
router.post('/', commentaireController.createCommentaire);
router.get('/', commentaireController.getAllCommentaires);
router.get('/:id', commentaireController.getCommentaireById);
router.get('/commande/:commande_id', commentaireController.getCommentairesByCommandeId);
router.put('/:id', commentaireController.updateCommentaire);
router.delete('/:id', commentaireController.deleteCommentaire);

export default router;