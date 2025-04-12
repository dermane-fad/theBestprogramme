const express = require('express');
const bodyParser = require('body-parser');
const entrepriseRoutes = require('./routes/entreprise');

const app = express();
app.use(bodyParser.json());

app.use('/api/entreprises', entrepriseRoutes);
// Ajouter ici les autres routes

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
