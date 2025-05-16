import db from '../database/database.js';

db.run(`
  CREATE TABLE IF NOT EXISTS LigneCommande (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nomProduit TEXT,
    quantite TEXT,
    prixUnitaire TEXT,
    totalLigne TEXT,
    commandeId INTEGER,
    produitId INTEGER,
    remiseId INTEGER,
    FOREIGN KEY (commandeId) REFERENCES Commande(id),
    FOREIGN KEY (produitId) REFERENCES Produit(id),
    FOREIGN KEY (remiseId) REFERENCES Remise(id)
  )
`);

const LigneCommande = {
  create: (data, cb) => {
    const { nomProduit, quantite, prixUnitaire, totalLigne, commandeId, produitId, remiseId } = data;
    db.run(
      `INSERT INTO LigneCommande (nomProduit, quantite, prixUnitaire, totalLigne, commandeId, produitId, remiseId) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [nomProduit, quantite, prixUnitaire, totalLigne, commandeId, produitId, remiseId],
      cb
    );
  },
  getAll: (cb) => db.all(`SELECT * FROM LigneCommande`, [], cb),
  getById: (id, cb) => db.get(`SELECT * FROM LigneCommande WHERE id = ?`, [id], cb),
  update: (id, data, cb) => {
    const { nomProduit, quantite, prixUnitaire, totalLigne, commandeId, produitId, remiseId } = data;
    db.run(
      `UPDATE LigneCommande SET nomProduit = ?, quantite = ?, prixUnitaire = ?, totalLigne = ?, commandeId = ?, produitId = ?, remiseId = ? WHERE id = ?`,
      [nomProduit, quantite, prixUnitaire, totalLigne, commandeId, produitId, remiseId, id],
      cb
    );
  },
  delete: (id, cb) => db.run(`DELETE FROM LigneCommande WHERE id = ?`, [id], cb)
};

export default LigneCommande;