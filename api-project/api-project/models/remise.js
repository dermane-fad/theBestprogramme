const db = require('../database/database');

db.run(`
  CREATE TABLE IF NOT EXISTS Remise (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    codeRemise TEXT,
    description TEXT,
    valeurRemise TEXT,
    typeRemise TEXT,
    dateDebut TEXT,
    dateFin TEXT,
    statutRemise TEXT,
    utilisationMax TEXT,
    utilisationActuelle TEXT
  )
`);

const Remise = {
  create: (data, cb) => {
    const { codeRemise, description, valeurRemise, typeRemise, dateDebut, dateFin, statutRemise, utilisationMax, utilisationActuelle } = data;
    db.run(`INSERT INTO Remise (codeRemise, description, valeurRemise, typeRemise, dateDebut, dateFin, statutRemise, utilisationMax, utilisationActuelle) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [codeRemise, description, valeurRemise, typeRemise, dateDebut, dateFin, statutRemise, utilisationMax, utilisationActuelle], cb);
  },
  getAll: (cb) => db.all(`SELECT * FROM Remise`, [], cb),
  getById: (id, cb) => db.get(`SELECT * FROM Remise WHERE id = ?`, [id], cb),
  update: (id, data, cb) => {
    const { codeRemise, description, valeurRemise, typeRemise, dateDebut, dateFin, statutRemise, utilisationMax, utilisationActuelle } = data;
    db.run(`UPDATE Remise SET codeRemise = ?, description = ?, valeurRemise = ?, typeRemise = ?, dateDebut = ?, dateFin = ?, statutRemise = ?, utilisationMax = ?, utilisationActuelle = ? WHERE id = ?`,
      [codeRemise, description, valeurRemise, typeRemise, dateDebut, dateFin, statutRemise, utilisationMax, utilisationActuelle, id], cb);
  },
  delete: (id, cb) => db.run(`DELETE FROM Remise WHERE id = ?`, [id], cb)
};

module.exports = Remise;
