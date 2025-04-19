const express = require('express');
const bodyParser = require('body-parser');
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
const db = require('./database/database');


// Initialisation de la base de données
const app = express();
app.use(bodyParser.json());
app.use('/api/entreprises', entrepriseRoutes);
app.use('/api/boutiques', boutiqueRoutes);
app.use('/api/clients',clientRoutes);
app.use('/api/employes', employeRoutes);
app.use('/api/conges', congeRoutes);
app.use('/api/commandes', commandeRoutes);
app.use('/api/lignecommandes', ligneCommandeRoutes);
app.use('/api/remises', remiseRoutes);
app.use('/api/produits', produitRoutes);
app.use('/api/categories', categorie);
app.use('/api/paiements', paiementRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
