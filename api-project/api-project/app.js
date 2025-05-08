const express = require('express');
const cors = require('cors'); // ✅ ajouter ceci
const bodyParser = require('body-parser');
const db = require('./database/database');
const app = express();


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

// Middleware pour gérer les erreurs
const PORT = process.env.PORT || 4000;
// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`✅ Serveur démarré sur http://localhost:${PORT}`);
});
