const db = require('../config/db');

const Notes = {
  create: async (data) => {
    const sql = 'INSERT INTO notes (name, description, creatorId, created_at, updated_at) VALUES (?, ?, ?, NOW(), NOW())';
    try {
      const [results] = await db.execute(sql, [data.name, data.description, data.creatorId]);
      
      let dataJSON = {
        status: 'success',
        data: results
    }
      return dataJSON;
    } catch (err) {
      throw err;
    }
  },

  getAll: async () => {
    try {
      const [results] = await db.execute(`
        SELECT notes.*, users.name AS creatorName
        FROM notes
        LEFT JOIN users ON notes.creatorId = users.id
         ORDER BY created_at DESC
      `);
      let dataJSON = {
        status: 'success',
        data: results
      };
      
      return dataJSON;
    } catch (err) {
      throw err;
    }
  },
  
  

  update: async (id, data) => {
    const sql = 'UPDATE notes SET name = ?, description = ?, creatorId = ?, updated_at = NOW() WHERE id = ?';
    try {
      const [results] = await db.execute(sql, [data.name, data.description, data.creatorId, id]);
      
      let dataJson = {
        status: 'success',
        data: results
    }
      return dataJson;
    } catch (err) {
      throw err;
    }
  },

  delete: async (id) => {
    try {
      const [results] = await db.execute('DELETE FROM notes WHERE id = ?', [id]);
      return results;
    } catch (err) {
      throw err;
    }
  },
};

module.exports = Notes;
