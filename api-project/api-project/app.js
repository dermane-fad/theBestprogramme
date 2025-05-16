const express = require('express');
const cors = require('cors'); // ✅ ajouter ceci
const bodyParser = require('body-parser');
const db = require('./database/database');
const app = express();
const reservationRoutes = require('./routes/reservation');
const commentaireRoutes = require('./routes/commentaire');
const entrepriseRoutes = require('./routes/entreprise');
const boutiqueRoutes = require('./routes/boutique');
const clientRoutes = require('./routes/client');
const employeRoutes = require('./routes/employe');
const congeRoutes = require('./routes/conge');
const commandeRoutes = require('./routes/commande');
const ligneCommandeRoutes = require('./routes/ligneCommande');
const remiseRoutes = require('./routes/remise');
const produitRoutes = require('./routes/produit');
const categorie = require('./routes/categorie');
const paiementRoutes = require('./routes/paiement');
const restaurantRoutes = require('./routes/restaurant');
const horaireRoutes = require('./routes/horaire');
const personneRoutes = require('./routes/personne');
const authRoutes = require('./routes/authRoutes');
const path = require('path');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const fs = require('fs');




// Gestion des erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Quelque chose a mal tourné!' });
});


// ✅ Activer CORS pour toutes les origines ou spécifier Angular uniquement
app.use(cors({
  origin: 'http://localhost:4200' // autorise uniquement Angular
}));

// Middleware pour gérer les erreurs de CORS
app.use(bodyParser.json());

// Enregistrer les routes
app.use('/api/entreprises', entrepriseRoutes);
app.use('/api/boutiques', boutiqueRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/employes', employeRoutes);
app.use('/api/conges', congeRoutes);
app.use('/api/commandes', commandeRoutes);
app.use('/api/lignecommandes', ligneCommandeRoutes);
app.use('/api/remises', remiseRoutes);
app.use('/api/produits', produitRoutes);
app.use('/api/categories', categorie);
app.use('/api/paiements', paiementRoutes);
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/horaires', horaireRoutes);
app.use('/api/reservations', reservationRoutes);
app.use('/api/commentaires', commentaireRoutes);
app.use('/api/personnes', personneRoutes);
app.use('/api/auth', authRoutes);


// Middleware pour gérer les erreurs
const PORT = process.env.PORT || 4000;
// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`✅ Serveur démarré sur http://localhost:${PORT}`);
});
