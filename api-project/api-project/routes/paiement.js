// routes/paiement.js
const express = require('express');
const router = express.Router();
const PaiementController = require('../controllers/paiementController');

router.post('/', PaiementController.create);
router.get('/', PaiementController.getAll);
router.get('/:id', PaiementController.getById);
router.put('/:id', PaiementController.update);
router.delete('/:id', PaiementController.delete);

module.exports = router;
