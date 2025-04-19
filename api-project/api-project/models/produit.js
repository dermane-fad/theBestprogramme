const db = require('../database/database');
db.run(`
  CREATE TABLE IF NOT EXISTS Produit (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    libelle TEXT NOT NULL,
    description TEXT,
    prix TEXT NOT NULL,
    quantiteStock TEXT NOT NULL,
    dateAjout TEXT,
    categorieId INTEGER,
    FOREIGN KEY (categorieId) REFERENCES Categorie(id)
  )
`);

const Produit = {
  create: (data, cb) => {
    const { libelle, description, prix, quantiteStock, dateAjout, categorieId } = data;
    db.run(`
      INSERT INTO Produit (libelle, description, prix, quantiteStock, dateAjout, categorieId)
      VALUES (?, ?, ?, ?, ?, ?)`,
      [libelle, description, prix, quantiteStock, dateAjout, categorieId],
      cb
    );
  },

  getAll: (cb) => db.all(`SELECT * FROM Produit`, [], cb),

  getById: (id, cb) => db.get(`SELECT * FROM Produit WHERE id = ?`, [id], cb),

  update: (id, data, cb) => {
    const { libelle, description, prix, quantiteStock, dateAjout, categorieId } = data;
    db.run(`
      UPDATE Produit SET libelle = ?, description = ?, prix = ?, quantiteStock = ?, dateAjout = ?, categorieId = ?
      WHERE id = ?`,
      [libelle, description, prix, quantiteStock, dateAjout, categorieId, id],
      cb
    );
  },

  delete: (id, cb) => db.run(`DELETE FROM Produit WHERE id = ?`, [id], cb)
};

module.exports = Produit;
