const Reservation = require('../models/reservation');

const reservationController = {
  // Créer une nouvelle réservation
  createReservation: async (req, res) => {
    try {
      const reservationData = req.body;
      Reservation.create(reservationData, function(err) {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Réservation créée avec succès' });
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Obtenir toutes les réservations
  getAllReservations: async (req, res) => {
    try {
      Reservation.getAll(function(err, reservations) {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        res.status(200).json(reservations);
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Obtenir une réservation par ID
  getReservationById: async (req, res) => {
    try {
      const { id } = req.params;
      Reservation.getById(id, function(err, reservation) {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        if (!reservation) {
          return res.status(404).json({ message: 'Réservation non trouvée' });
        }
        res.status(200).json(reservation);
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Obtenir les réservations d'un client
  getReservationsByClientId: async (req, res) => {
    try {
      const { client_id } = req.params;
      Reservation.getByClientId(client_id, function(err, reservations) {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        res.status(200).json(reservations);
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Obtenir les réservations d'un restaurant
  getReservationsByRestaurantId: async (req, res) => {
    try {
      const { restaurant_id } = req.params;
      Reservation.getByRestaurantId(restaurant_id, function(err, reservations) {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        res.status(200).json(reservations);
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Mettre à jour une réservation
  updateReservation: async (req, res) => {
    try {
      const { id } = req.params;
      const updateData = req.body;
      Reservation.update(id, updateData, function(err) {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ message: 'Réservation mise à jour avec succès' });
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Supprimer une réservation
  deleteReservation: async (req, res) => {
    try {
      const { id } = req.params;
      Reservation.delete(id, function(err) {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ message: 'Réservation supprimée avec succès' });
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = reservationController;