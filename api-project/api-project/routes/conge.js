const express = require('express');
const router = express.Router();
const congeController = require('../controllers/congeController');

router.post('/', congeController.create);
router.get('/', congeController.getAll);
router.get('/:id', congeController.getById);
router.get('/employe/:employeId', congeController.getByEmployeId);
router.put('/:id', congeController.update);
router.delete('/:id', congeController.delete);

module.exports = router;
