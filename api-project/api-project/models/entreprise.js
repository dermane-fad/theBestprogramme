import db from '../database/database.js';

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
});

const Entreprise = {
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

  getById: (id, callback) => {
    db.get(`SELECT * FROM Entreprise WHERE id = ?`, [id], callback);
  },

  update: (id, entreprise, callback) => {
    const { nomEntreprise, adresse, codePostal, pays, ville, contact, email } = entreprise;
    db.run(
      `UPDATE Entreprise SET nomEntreprise = ?, adresse = ?, codePostal = ?, pays = ?, ville = ?, contact = ?, email = ? WHERE id = ?`,
      [nomEntreprise, adresse, codePostal, pays, ville, contact, email, id],
      callback
    );
  },

  delete: (id, callback) => {
    db.run(`DELETE FROM Entreprise WHERE id = ?`, [id], callback);
  }
};

export default Entreprise;