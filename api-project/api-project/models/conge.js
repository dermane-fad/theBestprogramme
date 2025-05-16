import db from '../database/database.js';

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS Conge (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      employeId INTEGER,
      dateDebut TEXT,
      dateFin TEXT,
      raison TEXT,
      statut TEXT,
      FOREIGN KEY (employeId) REFERENCES Employe(id) ON DELETE CASCADE
    )
  `);
});

const Conge = {
  create: (conge, callback) => {
    const { employeId, dateDebut, dateFin, raison, statut } = conge;
    db.run(
      `INSERT INTO Conge (employeId, dateDebut, dateFin, raison, statut) VALUES (?, ?, ?, ?, ?)`,
      [employeId, dateDebut, dateFin, raison, statut],
      callback
    );
  },

  getAll: (callback) => {
    db.all(`SELECT * FROM Conge`, [], callback);
  },

  getById: (id, callback) => {
    db.get(`SELECT * FROM Conge WHERE id = ?`, [id], callback);
  },

  getByEmployeId: (employeId, callback) => {
    db.all(`SELECT * FROM Conge WHERE employeId = ?`, [employeId], callback);
  },

  update: (id, conge, callback) => {
    const { dateDebut, dateFin, raison, statut } = conge;
    db.run(
      `UPDATE Conge SET dateDebut = ?, dateFin = ?, raison = ?, statut = ? WHERE id = ?`,
      [dateDebut, dateFin, raison, statut, id],
      callback
    );
  },

  delete: (id, callback) => {
    db.run(`DELETE FROM Conge WHERE id = ?`, [id], callback);
  }
};

export default Conge;