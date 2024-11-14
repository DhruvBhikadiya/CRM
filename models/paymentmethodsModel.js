const db = require('../config/db');

const PaymentMethods = {
  create: async (data) => {
    const sql = 'INSERT INTO paymentmethods (name, details, created_at, updated_at) VALUES (?, ?, NOW(), NOW())';
    try {
      const [results] = await db.execute(sql, [data.name,data.details]);
      
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
      const [results] = await db.execute('SELECT * FROM paymentmethods ORDER BY created_at DESC');
      results.forEach(r => {
        r.details = JSON.parse(r.details);
      });
      
      let dataJSON = {
        status: 'success',
        data: results
    }
      return dataJSON;
    } catch (err) {
      throw err;
    }
  },

  update: async (id, data) => {
    const sql = 'UPDATE paymentmethods SET name = ?, details = ?, updated_at = NOW() WHERE id = ?';
    try {
      const [results] = await db.execute(sql, [data.name,data.details,id]);
      
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
      const [results] = await db.execute('DELETE FROM paymentmethods WHERE id = ?', [id]);
      return results;
    } catch (err) {
      throw err;
    }
  },
};

module.exports = PaymentMethods;
