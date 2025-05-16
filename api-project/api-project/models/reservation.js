const db = require('../database/database');

db.run(`
  CREATE TABLE IF NOT EXISTS Reservation (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    dateReservation TEXT NOT NULL,
    heureReservation TEXT NOT NULL,
    nombrePersonnes TEXT NOT NULL,
    client_id INTEGER NOT NULL,
    restaurant_id INTEGER NOT NULL,
    FOREIGN KEY (client_id) REFERENCES Client(id),
    FOREIGN KEY (restaurant_id) REFERENCES Restaurant(id)
  )
`);

const Reservation = {
  create: (data, cb) => {
    const { dateReservation, heureReservation, nombrePersonnes, client_id, restaurant_id } = data;
    db.run(
      `INSERT INTO Reservation (dateReservation, heureReservation, nombrePersonnes, client_id, restaurant_id) 
       VALUES (?, ?, ?, ?, ?)`,
      [dateReservation, heureReservation, nombrePersonnes, client_id, restaurant_id], 
      cb
    );
  },
  getAll: (cb) => db.all(`
    SELECT r.*, p.nom as client_nom, p.prenom as client_prenom, res.nom as restaurant_nom
    FROM Reservation r
    JOIN Personne p ON r.client_id = p.id
    JOIN Restaurant res ON r.restaurant_id = res.id
  `, [], cb),
  getById: (id, cb) => db.get(`
    SELECT r.*, p.nom as client_nom, p.prenom as client_prenom, res.nom as restaurant_nom
    FROM Reservation r
    JOIN Personne p ON r.client_id = p.id
    JOIN Restaurant res ON r.restaurant_id = res.id
    WHERE r.id = ?
  `, [id], cb),
  getByClientId: (client_id, cb) => db.all(`
    SELECT r.*, res.nom as restaurant_nom
    FROM Reservation r
    JOIN Restaurant res ON r.restaurant_id = res.id
    WHERE r.client_id = ?
  `, [client_id], cb),
  getByRestaurantId: (restaurant_id, cb) => db.all(`
    SELECT r.*, p.nom as client_nom, p.prenom as client_prenom
    FROM Reservation r
    JOIN Personne p ON r.client_id = p.id
    WHERE r.restaurant_id = ?
  `, [restaurant_id], cb),
  update: (id, data, cb) => {
    const { dateReservation, heureReservation, nombrePersonnes, client_id, restaurant_id } = data;
    db.run(
      `UPDATE Reservation 
       SET dateReservation = ?, heureReservation = ?, nombrePersonnes = ?, client_id = ?, restaurant_id = ? 
       WHERE id = ?`,
      [dateReservation, heureReservation, nombrePersonnes, client_id, restaurant_id, id], 
      cb
    );
  },
  delete: (id, cb) => db.run(`DELETE FROM Reservation WHERE id = ?`, [id], cb)
};

module.exports = Reservation;