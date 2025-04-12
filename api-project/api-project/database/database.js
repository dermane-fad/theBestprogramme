const db = require('../database/database');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS Entreprise (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nomEntreprise TEXT,
      adresse TEXT,
      codePostal TEXT,
      pays TEXT,
      ville TEXT,
      contact TEXT,
      email TEXT
    )
  `);
  db.run(`
    CREATE TABLE IF NOT EXISTS Boutique (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nom TEXT,
      idEntreprise INTEGER,
      FOREIGN KEY (idEntreprise) REFERENCES Entreprise(id)
    )
  `);
});

module.exports = {
  create: (entreprise, callback) => {
    const { nomEntreprise, adresse, codePostal, pays, ville, contact, email } = entreprise;
    db.run(
      `INSERT INTO Entreprise (nomEntreprise, adresse, codePostal, pays, ville, contact, email) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [nomEntreprise, adresse, codePostal, pays, ville, contact, email],
      callback
    );
  },

  getAll: (callback) => {
    db.all(`SELECT * FROM Entreprise`, [], callback);
  },
};

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