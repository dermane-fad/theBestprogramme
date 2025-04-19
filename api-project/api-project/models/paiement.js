// models/paiement.js
const db = require('../database/database');

db.run(`
  CREATE TABLE IF NOT EXISTS Paiement (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    montant REAL NOT NULL,
    datePaiement TEXT NOT NULL,
    modePaiement TEXT NOT NULL,
    idCommande INTEGER,
    FOREIGN KEY (idCommande) REFERENCES Commande(id)
  )
`);

const Paiement = {
  create: (paiement, callback) => {
    const { montant, datePaiement, modePaiement, idCommande } = paiement;
    db.run(
      `INSERT INTO Paiement (montant, datePaiement, modePaiement, idCommande) VALUES (?, ?, ?, ?)`,
      [montant, datePaiement, modePaiement, idCommande],
      callback
    );
  },

  getAll: (callback) => {
    db.all(`SELECT * FROM Paiement`, [], callback);
  },

  getById: (id, callback) => {
    db.get(`SELECT * FROM Paiement WHERE id = ?`, [id], callback);
  },

  update: (id, paiement, callback) => {
    const { montant, datePaiement, modePaiement, idCommande } = paiement;
    db.run(
      `UPDATE Paiement SET montant = ?, datePaiement = ?, modePaiement = ?, idCommande = ? WHERE id = ?`,
      [montant, datePaiement, modePaiement, idCommande, id],
      callback
    );
  },

  delete: (id, callback) => {
    db.run(`DELETE FROM Paiement WHERE id = ?`, [id], callback);
  }
};

module.exports = Paiement;
