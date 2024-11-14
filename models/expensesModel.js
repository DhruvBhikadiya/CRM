const db = require('../config/db');

const Expenses = {
  create: async (data) => {
    const sql = 'INSERT INTO expenses (title ,userId, amount, date, notes, created_at, updated_at) VALUES (?, ?, ?, ?, ?, NOW(), NOW())';
    try {
      const [results] = await db.execute(sql, [data.title, data.userId, data.amount, data.date, data.notes]);
      
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
      const [results] = await db.execute(`SELECT * FROM expenses ORDER BY created_at DESC`);
      
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
    const sql = 'UPDATE expenses SET title = ?, userId = ?, amount = ?, date = ?, notes = ?, updated_at = NOW() WHERE id = ?';
    try {
      const [results] = await db.execute(sql, [data.title, data.userId, data.amount, data.date, data.notes, id]);
      
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
      const [results] = await db.execute('DELETE FROM expenses WHERE id = ?', [id]);
      return results;
    } catch (err) {
      throw err;
    }
  },
};

module.exports = Expenses;
