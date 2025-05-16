const Personne = require('../models/personne');
const { hashPassword, comparePassword } = require('../utils/passwordUtils');
const { validatePersonne } = require('../utils/validation/personneValidator');

const personneController = {
  // Créer un compte
  register: async (req, res) => {
    try {
      // Validation des données
      const { error } = validatePersonne(req.body);
      if (error) {
        return res.status(400).json({ 
          error: error.details.map(d => d.message) 
        });
      }

      const { nom, prenom, email, password, role = 'client' } = req.body;
      
      // Vérifier si l'email existe déjà
      Personne.emailExists(email, async (err, exists) => {
        if (err) return res.status(500).json({ error: 'Erreur serveur' });
        if (exists) {
          return res.status(409).json({ error: 'Cet email est déjà utilisé' });
        }

        // Hacher le mot de passe
        const hashedPassword = await hashPassword(password);
        
        // Créer l'utilisateur
        Personne.create(
          { nom, prenom, email, password: hashedPassword, role },
          function(err) {
            if (err) return res.status(500).json({ error: 'Erreur lors de la création du compte' });
            
            // Ne pas renvoyer le mot de passe même hashé
            res.status(201).json({ 
              message: 'Compte créé avec succès',
              user: { nom, prenom, email, role }
            });
          }
        );
      });
    } catch (error) {
      console.error('Register error:', error);
      res.status(500).json({ error: 'Erreur serveur' });
    }
  },

  // Obtenir le profil
  getProfile: (req, res) => {
    const userId = req.user.id;
    Personne.findById(userId, (err, user) => {
      if (err) {
        console.error('GetProfile error:', err);
        return res.status(500).json({ error: 'Erreur serveur' });
      }
      if (!user) return res.status(404).json({ error: 'Utilisateur non trouvé' });
      
      res.json(user);
    });
  },

  // Mettre à jour le profil
  updateProfile: async (req, res) => {
    try {
      const userId = req.user.id;
      const { nom, prenom, email } = req.body;
      
      // Validation basique
      if (!nom || !prenom || !email) {
        return res.status(400).json({ error: 'Tous les champs sont requis' });
      }

      Personne.update(userId, { nom, prenom, email }, (err) => {
        if (err) {
          console.error('UpdateProfile error:', err);
          return res.status(500).json({ error: 'Erreur lors de la mise à jour' });
        }
        res.json({ 
          message: 'Profil mis à jour avec succès',
          user: { nom, prenom, email }
        });
      });
    } catch (error) {
      console.error('UpdateProfile error:', error);
      res.status(500).json({ error: 'Erreur serveur' });
    }
  },

  // Changer le mot de passe
  changePassword: async (req, res) => {
    try {
      const userId = req.user.id;
      const { currentPassword, newPassword } = req.body;
      
      if (!currentPassword || !newPassword) {
        return res.status(400).json({ error: 'Les deux mots de passe sont requis' });
      }

      // Vérifier l'ancien mot de passe
      Personne.findById(userId, async (err, user) => {
        if (err || !user) {
          console.error('ChangePassword error:', err);
          return res.status(500).json({ error: 'Erreur serveur' });
        }
        
        const isMatch = await comparePassword(currentPassword, user.password);
        if (!isMatch) {
          return res.status(401).json({ error: 'Mot de passe actuel incorrect' });
        }
        
        // Hacher et enregistrer le nouveau mot de passe
        const hashedPassword = await hashPassword(newPassword);
        Personne.updatePassword(userId, hashedPassword, (err) => {
          if (err) {
            console.error('ChangePassword error:', err);
            return res.status(500).json({ error: 'Erreur lors du changement de mot de passe' });
          }
          res.json({ message: 'Mot de passe changé avec succès' });
        });
      });
    } catch (error) {
      console.error('ChangePassword error:', error);
      res.status(500).json({ error: 'Erreur serveur' });
    }
  },

  // Admin: Récupérer tous les utilisateurs
  getAll: (req, res) => {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Accès non autorisé' });
    }

    Personne.getAll((err, users) => {
      if (err) {
        console.error('GetAllUsers error:', err);
        return res.status(500).json({ error: 'Erreur serveur' });
      }
      res.status(200).json(users);
    });
  },

  // Admin: Récupérer un utilisateur spécifique
  getUserById: (req, res) => {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Accès non autorisé' });
    }

    Personne.findById(req.params.id, (err, user) => {
      if (err) {
        console.error('GetUserById error:', err);
        return res.status(500).json({ error: 'Erreur serveur' });
      }
      if (!user) return res.status(404).json({ error: 'Utilisateur non trouvé' });
      res.status(200).json(user);
    });
  },

  // Admin: Supprimer un utilisateur
  delete: (req, res) => {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Accès non autorisé' });
    }

    const userId = req.params.id;
    
    // Empêcher un admin de se supprimer lui-même
    if (userId === req.user.id) {
      return res.status(400).json({ error: 'Vous ne pouvez pas supprimer votre propre compte' });
    }

    Personne.delete(userId, (err) => {
      if (err) {
        console.error('DeleteUser error:', err);
        return res.status(500).json({ error: 'Erreur lors de la suppression' });
      }
      res.status(200).json({ message: 'Utilisateur supprimé avec succès' });
    });
  },

  // Vérifier la disponibilité d'un email
  checkEmail: (req, res) => {
    const { email } = req.query;
    if (!email) {
      return res.status(400).json({ error: 'Paramètre email requis' });
    }

    Personne.emailExists(email, (err, exists) => {
      if (err) {
        console.error('CheckEmail error:', err);
        return res.status(500).json({ error: 'Erreur serveur' });
      }
      res.status(200).json({ available: !exists });
    });
  }
};

module.exports = personneController;