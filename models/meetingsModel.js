const db = require('../config/db');

const Meetings = {
  create: async (data) => {
    const sql = 'INSERT INTO meetings (title ,time, userId, clientId, url, created_at, updated_at) VALUES (?, ?, ?, ?, NOW(), NOW())';
    try {
      const [results] = await db.execute(sql, [data.title, data.time, data.userId, data.clientId, data.url]);
      
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
        SELECT 
          meetings.*, 
          users.name AS userName, 
          clients.name AS clientName
        FROM meetings
        LEFT JOIN users ON meetings.userId = users.id
        LEFT JOIN clients ON meetings.clientId = clients.id
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
    const sql = 'UPDATE meetings SET title = ?, time = ?, userId = ?, clientId = ?, url = ?, updated_at = NOW() WHERE id = ?';
    try {
      const [results] = await db.execute(sql, [data.title, data.time, data.userId, data.clientId, data.url, id]);
      
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
      const [results] = await db.execute('DELETE FROM meetings WHERE id = ?', [id]);
      return results;
    } catch (err) {
      throw err;
    }
  },
};

module.exports = Meetings;
