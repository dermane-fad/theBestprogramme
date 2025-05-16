import express from 'express';
import categorieController from '../controllers/categorieController.js';

const router = express.Router();
router.post('/', categorieController.createCategorie);
router.get('/', categorieController.getAllCategories);
router.get('/:id', categorieController.getCategorieById);
router.put('/:id', categorieController.updateCategorie);
router.delete('/:id', categorieController.deleteCategorie);

export default router;