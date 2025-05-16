import db from '../database/database.js';

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS Restaurant (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      capaciteMax INTEGER,
      description TEXT
    )
  `);
});

const Restaurant = {
  create: (restaurant, callback) => {
    const { capaciteMax, description } = restaurant;
    db.run(
      `INSERT INTO Restaurant (capaciteMax, description) VALUES (?, ?)`,
      [capaciteMax, description],
      callback
    );
  },

  getAll: (callback) => {
    db.all(`SELECT * FROM Restaurant`, [], callback);
  },

  getById: (id, callback) => {
    db.get(`SELECT * FROM Restaurant WHERE id = ?`, [id], callback);
  },

  update: (id, restaurant, callback) => {
    const { capaciteMax, description } = restaurant;
    db.run(
      `UPDATE Restaurant SET capaciteMax = ?, description = ? WHERE id = ?`,
      [capaciteMax, description, id],
      callback
    );
  },

  delete: (id, callback) => {
    db.run(`DELETE FROM Restaurant WHERE id = ?`, [id], callback);
  }
};

export default Restaurant;