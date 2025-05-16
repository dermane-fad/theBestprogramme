const db = require('../database/database');
const bcrypt = require('bcryptjs');
const { JWT_SECRET } = require('../config');

// Création de la table Personne
db.run(`
  CREATE TABLE IF NOT EXISTS Personne (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nom TEXT NOT NULL,
    prenom TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT NOT NULL CHECK(role IN ('client', 'restaurateur', 'admin')),
    date_inscription TEXT DEFAULT CURRENT_TIMESTAMP
  )
`);

const Personne = {
  // Créer une nouvelle personne avec mot de passe hashé
  create: async (data, cb) => {
    try {
      const { nom, prenom, email, password, role } = data;
      const hashedPassword = await bcrypt.hash(password, 10);
      
      db.run(
        `INSERT INTO Personne (nom, prenom, email, password, role) 
         VALUES (?, ?, ?, ?, ?)`,
        [nom, prenom, email, hashedPassword, role],
        cb
      );
    } catch (err) {
      cb(err);
    }
  },

  // Authentifier un utilisateur
  authenticate: async (email, password, cb) => {
    try {
      db.get(
        `SELECT * FROM Personne WHERE email = ?`,
        [email],
        async (err, user) => {
          if (err) return cb(err);
          if (!user) return cb(new Error('Utilisateur non trouvé'));

          const isMatch = await bcrypt.compare(password, user.password);
          if (!isMatch) return cb(new Error('Mot de passe incorrect'));

          // Générer un token JWT
          const token = jwt.sign(
            { id: user.id, email: user.email, role: user.role },
            JWT_SECRET,
            { expiresIn: '8h' }
          );

          cb(null, { 
            user: {
              id: user.id,
              nom: user.nom,
              prenom: user.prenom,
              email: user.email,
              role: user.role
            },
            token 
          });
        }
      );
    } catch (err) {
      cb(err);
    }
  },

  // Trouver par email
  findByEmail: (email, cb) => {
    db.get(
      `SELECT id, nom, prenom, email, role, date_inscription 
       FROM Personne WHERE email = ?`,
      [email],
      cb
    );
  },

  // Trouver par ID (sans mot de passe)
  findById: (id, cb) => {
    db.get(
      `SELECT id, nom, prenom, email, role, date_inscription 
       FROM Personne WHERE id = ?`,
      [id],
      cb
    );
  },

  // Mettre à jour les informations de base
  updateProfile: (id, data, cb) => {
    const { nom, prenom, email } = data;
    db.run(
      `UPDATE Personne 
       SET nom = ?, prenom = ?, email = ?
       WHERE id = ?`,
      [nom, prenom, email, id],
      cb
    );
  },

  // Changer le mot de passe (avec hash)
  updatePassword: async (id, newPassword, cb) => {
    try {
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      db.run(
        `UPDATE Personne SET password = ? WHERE id = ?`,
        [hashedPassword, id],
        cb
      );
    } catch (err) {
      cb(err);
    }
  },

  // Supprimer un utilisateur
  delete: (id, cb) => {
    db.run(`DELETE FROM Personne WHERE id = ?`, [id], cb);
  },
   
  // Récupérer toutes les personnes (pour admin)
  getAll: (cb) => {
    db.all(
      `SELECT id, nom, prenom, email, role, date_inscription 
       FROM Personne`,
      cb
    );
  },

  // Vérifications utiles
  emailExists: (email, cb) => {
    db.get(
      `SELECT 1 FROM Personne WHERE email = ?`,
      [email],
      (err, row) => cb(err, !!row)
    );
  },

  idExists: (id, cb) => {
    db.get(
      `SELECT 1 FROM Personne WHERE id = ?`,
      [id],
      (err, row) => cb(err, !!row)
    );
  },

  // Récupérer le rôle
  getRole: (id, cb) => {
    db.get(
      `SELECT role FROM Personne WHERE id = ?`,
      [id],
      (err, row) => cb(err, row ? row.role : null)
    );
  },

  // Méthode pour générer un token JWT
  generateAuthToken: (user) => {
    return jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role
      },
      JWT_SECRET,
      { expiresIn: '8h' }
    );
  }
};

module.exports = Personne;