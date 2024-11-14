const db = require('../config/db');

const Invoices = {
  create: async (data) => {
    const sql = 'INSERT INTO invoices (clientId ,projectId ,startDate, endDate, notes, items, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, NOW(), NOW())';
    try {
      const [results] = await db.execute(sql, [data.clientId, data.projectId, data.startDate, data.endDate, data.notes, data.items]);
      
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
          invoices.*, 
          projects.name AS projectName, 
          clients.name AS clientName
        FROM invoices
        LEFT JOIN projects ON invoices.projectId = projects.id
        LEFT JOIN clients ON invoices.clientId = clients.id
        ORDER BY invoices.created_at DESC
      `);

      results.forEach(r => {
        r.items = JSON.parse(r.items);
      });
      
      let dataJSON = {
        status: 'success',
        data: results
      };
      return dataJSON;
    } catch (err) {
      throw err;
    }
  },
  
  getInvoicesByClientId: async (clientId) => {
    try {
      const [results] = await db.execute('SELECT * FROM invoices WHERE clientId = ? ORDER BY created_at DESC', [clientId]);

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
    const sql = 'UPDATE invoices SET clientId = ?, projectId = ?, startDate = ?, endDate = ?, notes = ?, items = ?, updated_at = NOW() WHERE id = ?';
    try {
      const [results] = await db.execute(sql, [data.clientId, data.projectId, data.startDate, data.endDate, data.notes, data.items, id]);
      
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
      const [results] = await db.execute('DELETE FROM invoices WHERE id = ?', [id]);
      return results;
    } catch (err) {
      throw err;
    }
  },
};

module.exports = Invoices;
