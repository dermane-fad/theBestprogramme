import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

// Pour __dirname en ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

export default db;