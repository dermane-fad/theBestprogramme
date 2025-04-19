const db = require('../database/database');
// Création de la table Categorie
db.run(`
  CREATE TABLE IF NOT EXISTS Categorie (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nom TEXT
  )
`);

const Categorie = {
  create: (categorie, callback) => {
    db.run(`INSERT INTO Categorie (nom) VALUES (?)`, [categorie.nom], callback);
  },

  getAll: (callback) => {
    db.all(`SELECT * FROM Categorie`, [], callback);
  },

  getById: (id, callback) => {
    db.get(`SELECT * FROM Categorie WHERE id = ?`, [id], callback);
  },

  update: (id, categorie, callback) => {
    db.run(`UPDATE Categorie SET nom = ? WHERE id = ?`, [categorie.nom, id], callback);
  },

  delete: (id, callback) => {
    db.run(`DELETE FROM Categorie WHERE id = ?`, [id], callback);
  }
};

module.exports = Categorie;
