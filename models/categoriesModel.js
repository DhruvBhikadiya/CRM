const db = require('../config/db');

const Categories = {
  create: async (data) => {
    const sql = 'INSERT INTO categories (name ,agreement, created_at, updated_at) VALUES (?, ?, NOW(), NOW())';
    try {
      const [results] = await db.execute(sql, [data.name, data.agreement]);
      
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
      const [results] = await db.execute(`SELECT * FROM categories ORDER BY created_at DESC`);
      
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
    const sql = 'UPDATE categories SET name = ?, agreement = ?, updated_at = NOW() WHERE id = ?';
    try {
      const [results] = await db.execute(sql, [data.name, data.agreement, id]);
      
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
      const [results] = await db.execute('DELETE FROM categories WHERE id = ?', [id]);
      return results;
    } catch (err) {
      throw err;
    }
  },
};

module.exports = Categories;
