const jwt = require('jsonwebtoken');
const Personne = require('../models/personne');
const { hashPassword, comparePassword } = require('../utils/passwordUtils');
const { JWT_SECRET, JWT_EXPIRES_IN } = require('../config');

// Helper pour promisifier les méthodes du modèle
const findByEmailAsync = (email) => {
  return new Promise((resolve, reject) => {
    Personne.findByEmail(email, (err, user) => {
      if (err) return reject(err);
      resolve(user);
    });
  });
};

const createUserAsync = (userData) => {
  return new Promise((resolve, reject) => {
    Personne.create(userData, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

const authController = {
  register: async (req, res) => {
    const { nom, prenom, email, password, role } = req.body;

    // Validation des données
    if (!nom || !prenom || !email || !password) {
      return res.status(400).json({ error: 'Tous les champs sont obligatoires' });
    }

    try {
      // Vérifier si l'utilisateur existe déjà
      const existingUser = await findByEmailAsync(email);
      if (existingUser) {
        return res.status(409).json({ error: 'Un utilisateur avec cet email existe déjà' });
      }

      // Hasher le mot de passe
      const hashedPassword = await hashPassword(password);

      // Créer le nouvel utilisateur
      const newUser = {
        nom,
        prenom,
        email,
        password: hashedPassword,
        role: role || 'user' // Valeur par défaut si non spécifié
      };

      const createdUser = await createUserAsync(newUser);

      // Créer le token JWT
      const token = jwt.sign(
        { 
          id: createdUser.id,
          nom: createdUser.nom,
          prenom: createdUser.prenom,
          email: createdUser.email,
          role: createdUser.role 
        },
        JWT_SECRET,
        { expiresIn: JWT_EXPIRES_IN }
      );

      // Retourner la réponse sans le mot de passe
      const { password: _, ...userWithoutPassword } = createdUser;

      return res.status(201).json({
        message: 'Utilisateur enregistré avec succès',
        token,
        user: userWithoutPassword
      });

    } catch (error) {
      console.error('Erreur lors de l\'enregistrement:', error);
      return res.status(500).json({ error: 'Erreur interne du serveur' });
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ error: 'Email et mot de passe requis' });
    }

    try {
      const user = await findByEmailAsync(email);
      if (!user) {
        await new Promise(resolve => setTimeout(resolve, 500));
        return res.status(401).json({ error: 'Authentification échouée' });
      }
      
      const isMatch = await comparePassword(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ error: 'Authentification échouée' });
      }
      
      const token = jwt.sign(
        { 
          id: user.id,
          nom: user.nom,
          prenom: user.prenom,
          email: user.email,
          role: user.role 
        },
        JWT_SECRET,
        { expiresIn: JWT_EXPIRES_IN }
      );
      
      const { password: _, ...userWithoutPassword } = user;
      
      return res.json({
        message: 'Connexion réussie',
        token,
        user: userWithoutPassword
      });
    } catch (error) {
      console.error('Erreur de connexion:', error);
      return res.status(500).json({ error: 'Erreur interne du serveur' });
    }
  }
};

module.exports = authController;