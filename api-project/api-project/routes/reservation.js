const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservation');

// Routes pour les réservations
router.post('/', reservationController.createReservation);
router.get('/', reservationController.getAllReservations);
router.get('/:id', reservationController.getReservationById);
router.get('/client/:client_id', reservationController.getReservationsByClientId);
router.get('/restaurant/:restaurant_id', reservationController.getReservationsByRestaurantId);
router.put('/:id', reservationController.updateReservation);
router.delete('/:id', reservationController.deleteReservation);

module.exports = router;