const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Chemin vers le fichier SQLite
const dbPath = path.resolve(__dirname, 'database.sqlite');

// Connexion à la base de données
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('❌ Erreur de connexion à la base de données SQLite:', err.message);
  } else {
    console.log('✅ Connecté à la base de données SQLite.');
  }
});

module.exports = db;
