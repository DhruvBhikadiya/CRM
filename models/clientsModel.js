const db = require('../config/db');

const Clients = {
  create: async (data) => {
    const sql = 'INSERT INTO clients (name ,email, password, mobile, address, gender, website, notes, creatorId, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?,  ?, NOW(), NOW())';
    try {
      const [results] = await db.execute(sql, [data.name, data.email, data.password, data.mobile, data.address, data.gender, data.website, data.notes, data.creatorId]);
      
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
      const [results] = await db.execute(`SELECT * FROM clients ORDER BY created_at DESC`);
      
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
    const sql = 'UPDATE clients SET name = ?, email = ?, password = ?, mobile = ?, address = ?, gender = ?, website = ?, notes = ?, creatorId = ?, updated_at = NOW() WHERE id = ?';
    try {
      const [results] = await db.execute(sql, [data.name, data.email, data.password, data.mobile, data.address, data.gender, data.website, data.notes, data.creatorId, id]);
      
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
      const [results] = await db.execute('DELETE FROM clients WHERE id = ?', [id]);
      return results;
    } catch (err) {
      throw err;
    }
  },
};

module.exports = Clients;
