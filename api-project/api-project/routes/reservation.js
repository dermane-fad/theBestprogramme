import express from 'express';
import reservationController from '../controllers/reservation.js';
const router = express.Router();


// Routes pour les réservations
router.post('/', reservationController.createReservation);
router.get('/', reservationController.getAllReservations);
router.get('/:id', reservationController.getReservationById);
router.get('/client/:client_id', reservationController.getReservationsByClientId);
router.get('/restaurant/:restaurant_id', reservationController.getReservationsByRestaurantId);
router.put('/:id', reservationController.updateReservation);
router.delete('/:id', reservationController.deleteReservation);

export default router;