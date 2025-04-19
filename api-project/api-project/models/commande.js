// Fichier : models/commande.js
const db = require('../database/database');

db.run(`
  CREATE TABLE IF NOT EXISTS Commande (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    dateCommande TEXT,
    montantTotal TEXT,
    clientId INTEGER,
    FOREIGN KEY (clientId) REFERENCES Client(id)
  )
`);

const Commande = {
  create: (data, cb) => {
    const { dateCommande, montantTotal, clientId } = data;
    db.run(`INSERT INTO Commande (dateCommande, montantTotal, clientId) VALUES (?, ?, ?)`,
      [dateCommande, montantTotal, clientId], cb);
  },
  getAll: (cb) => db.all(`SELECT * FROM Commande`, [], cb),
  getById: (id, cb) => db.get(`SELECT * FROM Commande WHERE id = ?`, [id], cb),
  update: (id, data, cb) => {
    const { dateCommande, montantTotal, clientId } = data;
    db.run(`UPDATE Commande SET dateCommande = ?, montantTotal = ?, clientId = ? WHERE id = ?`,
      [dateCommande, montantTotal, clientId, id], cb);
  },
  delete: (id, cb) => db.run(`DELETE FROM Commande WHERE id = ?`, [id], cb)
};

module.exports = Commande;