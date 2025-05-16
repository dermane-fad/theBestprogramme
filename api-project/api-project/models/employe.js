import db from '../database/database.js';

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS Employe (
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
      dateEmbauche TEXT
    )
  `);
});

const Employe = {
  create: (employe, callback) => {
    const { nom, prenom, dateNaissance, adresse, ville, pays, telephone, email, password, dateEmbauche } = employe;
    db.run(
      `INSERT INTO Employe (nom, prenom, dateNaissance, adresse, ville, pays, telephone, email, password, dateEmbauche) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [nom, prenom, dateNaissance, adresse, ville, pays, telephone, email, password, dateEmbauche],
      callback
    );
  },

  getAll: (callback) => {
    db.all(`SELECT * FROM Employe`, [], callback);
  },

  getById: (id, callback) => {
    db.get(`SELECT * FROM Employe WHERE id = ?`, [id], callback);
  },

  update: (id, employe, callback) => {
    const { nom, prenom, dateNaissance, adresse, ville, pays, telephone, email, password, dateEmbauche } = employe;
    db.run(
      `UPDATE Employe SET nom = ?, prenom = ?, dateNaissance = ?, adresse = ?, ville = ?, pays = ?, telephone = ?, email = ?, password = ?, dateEmbauche = ? WHERE id = ?`,
      [nom, prenom, dateNaissance, adresse, ville, pays, telephone, email, password, dateEmbauche, id],
      callback
    );
  },

  delete: (id, callback) => {
    db.run(`DELETE FROM Employe WHERE id = ?`, [id], callback);
  }
};

export default Employe;