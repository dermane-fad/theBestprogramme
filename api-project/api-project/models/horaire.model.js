const db = require('../database/database');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS Horaire (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      jourSemaine TEXT,
      heureOuverture TEXT,
      heureFermeture TEXT,
      estFerme INTEGER
    )
  `);
});

const Horaire = {
  create: (horaire, callback) => {
    const { jourSemaine, heureOuverture, heureFermeture, estFerme } = horaire;
    db.run(
      `INSERT INTO Horaire (jourSemaine, heureOuverture, heureFermeture, estFerme) VALUES (?, ?, ?, ?)`,
      [jourSemaine, heureOuverture, heureFermeture, estFerme],
      callback
    );
  },

  getAll: (callback) => {
    db.all(`SELECT * FROM Horaire`, [], callback);
  },

  getById: (id, callback) => {
    db.get(`SELECT * FROM Horaire WHERE id = ?`, [id], callback);
  },

  update: (id, horaire, callback) => {
    const { jourSemaine, heureOuverture, heureFermeture, estFerme } = horaire;
    db.run(
      `UPDATE Horaire SET jourSemaine = ?, heureOuverture = ?, heureFermeture = ?, estFerme = ? WHERE id = ?`,
      [jourSemaine, heureOuverture, heureFermeture, estFerme, id],
      callback
    );
  },

  delete: (id, callback) => {
    db.run(`DELETE FROM Horaire WHERE id = ?`, [id], callback);
  }
};

module.exports = Horaire;
