import db from '../database/database.js';

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS Client (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nom TEXT,
      prenom TEXT,
      dateNaissance TEXT,
      adresse TEXT,
      ville TEXT,
      pays TEXT,
      telephone TEXT,
      email TEXT,
      password TEXT,
      statut TEXT
    )
  `);
});

const Client = {
  create: (client, callback) => {
    const { nom, prenom, dateNaissance, adresse, ville, pays, telephone, email, password, statut } = client;
    db.run(
      `INSERT INTO Client (nom, prenom, dateNaissance, adresse, ville, pays, telephone, email, password, statut) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [nom, prenom, dateNaissance, adresse, ville, pays, telephone, email, password, statut],
      callback
    );
  },

  getAll: (callback) => {
    db.all(`SELECT * FROM Client`, [], callback);
  },

  getById: (id, callback) => {
    db.get(`SELECT * FROM Client WHERE id = ?`, [id], callback);
  },

  update: (id, client, callback) => {
    const { nom, prenom, dateNaissance, adresse, ville, pays, telephone, email, password, statut } = client;
    db.run(
      `UPDATE Client SET nom = ?, prenom = ?, dateNaissance = ?, adresse = ?, ville = ?, pays = ?, telephone = ?, email = ?, password = ?, statut = ? WHERE id = ?`,
      [nom, prenom, dateNaissance, adresse, ville, pays, telephone, email, password, statut, id],
      callback
    );
  },

  delete: (id, callback) => {
    db.run(`DELETE FROM Client WHERE id = ?`, [id], callback);
  }
};

export default Client;