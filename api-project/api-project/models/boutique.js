import db from '../database/database.js';

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

/**
 * @class Boutique
 * @classdesc Représente une boutique.
 */

class Boutique {
  /**
   * Crée une nouvelle boutique.
   * @param {Object} data - Les données de la boutique.
   * @param {Function} cb - La fonction de rappel.
   */
  static create(data, cb) {
    const { nom, idEntreprise } = data;
    db.run(
      `INSERT INTO Boutique (nom, idEntreprise) VALUES (?, ?)`,
      [nom, idEntreprise],
      cb
    );
  }
  /**
   * Récupère toutes les boutiques.
   * @param {Function} cb - La fonction de rappel.
   */
  static getAll(cb) {
    db.all(`SELECT * FROM Boutique`, [], cb);
  }
  /**
   * Récupère une boutique par son ID.
   * @param {number} id - L'ID de la boutique.
   * @param {Function} cb - La fonction de rappel.
   */
  static getById(id, cb) {
    db.get(`SELECT * FROM Boutique WHERE id = ?`, [id], cb);
  } 
  /**
   * Met à jour une boutique.
   * @param {number} id - L'ID de la boutique.
   * @param {Object} data - Les nouvelles données de la boutique.
   * @param {Function} cb - La fonction de rappel.
   */
  static update(id, data, cb) {
    const { nom, idEntreprise } = data;
    db.run(
      `UPDATE Boutique SET nom = ?, idEntreprise = ? WHERE id = ?`,
      [nom, idEntreprise, id],
      cb
    );
  }
  /**
   * Supprime une boutique.
   * @param {number} id - L'ID de la boutique.
   * @param {Function} cb - La fonction de rappel.
   */
  static delete(id, cb) {
    db.run(`DELETE FROM Boutique WHERE id = ?`, [id], cb);
  } 
  /**
   * Récupère les produits d'une boutique par son ID.
   * @param {number} id - L'ID de la boutique.
   * @param {Function} cb - La fonction de rappel.
   */
  static getProductsByBoutiqueId(id, cb) {
    db.all(
      `SELECT * FROM Produit WHERE idBoutique = ?`,
      [id],
      cb
    );
  } 
  /**
   * Récupère les employés d'une boutique par son ID.
   * @param {number} id - L'ID de la boutique.
   * @param {Function} cb - La fonction de rappel.
   */
  static getEmployeesByBoutiqueId(id, cb) {
    db.all(
      `SELECT * FROM Employe WHERE idBoutique = ?`,
      [id],
      cb
    );
  }   

  /**
   * Récupère les commandes d'une boutique par son ID.
   * @param {number} id - L'ID de la boutique.
   * @param {Function} cb - La fonction de rappel.
   */
  static getCommandesByBoutiqueId(id, cb) {
    db.all(
      `SELECT * FROM Commande WHERE idBoutique = ?`,
      [id],
      cb
    );
  }
  /**
   * Récupère les lignes de commande d'une boutique par son ID.
   * @param {number} id - L'ID de la boutique.
   * @param {Function} cb - La fonction de rappel.
   */ 
  static getLignesCommandesByBoutiqueId(id, cb) {
    db.all(
      `SELECT * FROM LigneCommande WHERE idBoutique = ?`,
      [id],
      cb
    );
  }
  /**
   * Récupère les clients d'une boutique par son ID.
   * @param {number} id - L'ID de la boutique.
   * @param {Function} cb - La fonction de rappel.
   */
  static getClientsByBoutiqueId(id, cb) {
    db.all(
      `SELECT * FROM Client WHERE idBoutique = ?`,
      [id],
      cb
    );
  }
  /**
   * Récupère les fournisseurs d'une boutique par son ID.
   * @param {number} id - L'ID de la boutique.
   * @param {Function} cb - La fonction de rappel.
   */
  static getFournisseursByBoutiqueId(id, cb) {
    db.all(
      `SELECT * FROM Fournisseur WHERE idBoutique = ?`,
      [id],
      cb
    );
  }
  /**
   * Récupère les catégories d'une boutique par son ID.
   * @param {number} id - L'ID de la boutique.
   * @param {Function} cb - La fonction de rappel.
   */
  static getCategoriesByBoutiqueId(id, cb) {
    db.all(
      `SELECT * FROM Categorie WHERE idBoutique = ?`,
      [id],
      cb
    );
  }
  /**
   * Récupère les remises d'une boutique par son ID.
   * @param {number} id - L'ID de la boutique.
   * @param {Function} cb - La fonction de rappel.
   */
  static getRemisesByBoutiqueId(id, cb) {
    db.all(
      `SELECT * FROM Remise WHERE idBoutique = ?`,
      [id],
      cb
    );
  }
}

export default Boutique;