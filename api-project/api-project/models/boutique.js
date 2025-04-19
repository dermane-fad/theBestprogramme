const db = require('../database/database');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS Boutique (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nom TEXT,
      idEntreprise INTEGER,
      FOREIGN KEY (idEntreprise) REFERENCES Entreprise(id)
    )
  `);
});

const Boutique = {
  create: (boutique, callback) => {
    const { nom, idEntreprise } = boutique;
    db.run(
      `INSERT INTO Boutique (nom, idEntreprise) VALUES (?, ?)`,
      [nom, idEntreprise],
      callback
    );
  },

  getAll: (callback) => {
    db.all(`SELECT * FROM Boutique`, [], callback);
  },

  getById: (id, callback) => {
    db.get(`SELECT * FROM Boutique WHERE id = ?`, [id], callback);
  },

  update: (id, boutique, callback) => {
    const { nom, idEntreprise } = boutique;
    db.run(
      `UPDATE Boutique SET nom = ?, idEntreprise = ? WHERE id = ?`,
      [nom, idEntreprise, id],
      callback
    );
  },

  delete: (id, callback) => {
    db.run(`DELETE FROM Boutique WHERE id = ?`, [id], callback);
  }
};

module.exports = Boutique;
