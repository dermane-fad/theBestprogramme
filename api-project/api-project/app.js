import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import db from './database/database.js';
import entrepriseRoutes from './routes/entreprise.js';
import boutiqueRoutes from './routes/boutique.js';
import clientRoutes from './routes/client.js';
import employeRoutes from './routes/employe.js';
import congeRoutes from './routes/conge.js';
import commandeRoutes from './routes/commande.js';
import ligneCommandeRoutes from './routes/ligneCommande.js';
import remiseRoutes from './routes/remise.js';
import produitRoutes from './routes/produit.js';
import categorie from './routes/categorie.js';
import paiementRoutes from './routes/paiement.js';
import restaurantRoutes from './routes/restaurant.js';
import horaireRoutes from './routes/horaire.js';
import reservationRoutes from './routes/reservation.js';
import commentaireRoutes from './routes/commentaire.js';
import personneRoutes from './routes/personne.js';
import authRoutes from './routes/authRoutes.js';
import path from 'path';
import multer from 'multer';
import fs from 'fs';

const app = express();
const upload = multer({ dest: 'uploads/' });

// Gestion des erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Quelque chose a mal tourné!' });
});

// ✅ Activer CORS pour toutes les origines ou spécifier Angular uniquement
app.use(cors({
  origin: 'http://localhost:4200' // autorise uniquement Angular
}));

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

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`✅ Serveur démarré sur http://localhost:${PORT}`);
});