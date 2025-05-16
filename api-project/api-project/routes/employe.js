import express from 'express';
import employeController from '../controllers/employeController.js';

const router = express.Router();

// Créer un employé
router.post('/', employeController.createEmploye);

// Récupérer tous les employés
router.get('/', employeController.getAllEmployes);

// Récupérer un employé par ID
router.get('/:id', employeController.getEmployeById);

// Mettre à jour un employé
router.put('/:id', employeController.updateEmploye);

// Supprimer un employé
router.delete('/:id', employeController.deleteEmploye);

export default router;