const db = require('../database/database');

db.run(`
  CREATE TABLE IF NOT EXISTS Commentaire (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    libelle TEXT NOT NULL,
    dateCommentaire TEXT DEFAULT CURRENT_TIMESTAMP,
    commande_id INTEGER NOT NULL,
    FOREIGN KEY (commande_id) REFERENCES Commande(id) ON DELETE CASCADE
  )
`);

const Commentaire = {
  create: (data, cb) => {
    const { libelle, commande_id } = data;
    db.run(
      `INSERT INTO Commentaire (libelle, commande_id) 
       VALUES (?, ?)`,
      [libelle, commande_id], 
      cb
    );
  },
  getAll: (cb) => db.all(`
    SELECT co.*, c.date as dateCommande, p.nom, p.prenom 
    FROM Commentaire co
    JOIN Commande c ON co.commande_id = c.id
    JOIN Personne p ON c.client_id = p.id
  `, [], cb),
  getById: (id, cb) => db.get(`
    SELECT * FROM Commentaire WHERE id = ?
  `, [id], cb),
  getByCommandeId: (commande_id, cb) => db.all(`
    SELECT * FROM Commentaire WHERE commande_id = ?
  `, [commande_id], cb),
  update: (id, data, cb) => {
    const { libelle, commande_id } = data;
    db.run(
      `UPDATE Commentaire 
       SET libelle = ?, commande_id = ? 
       WHERE id = ?`,
      [libelle, commande_id, id], 
      cb
    );
  },
  delete: (id, cb) => db.run(`DELETE FROM Commentaire WHERE id = ?`, [id], cb)
};

module.exports = Commentaire;