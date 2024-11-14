const db = require('../config/db');

const payments = {
  create: async (data) => {
    const sql = 'INSERT INTO payments (clientId, invoiceId, paymentMethodId, amount, date, created_at, updated_at) VALUES (?, ?,?, ?,?, NOW(), NOW())';
    try {
      const [results] = await db.execute(sql, [data.clientId,data.invoiceId,data.paymentMethodId,data.amount,data.date]);
      
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
          payments.*, 
          paymentmethods.name AS paymentMethodName, 
          clients.name AS clientName
        FROM payments
        LEFT JOIN paymentmethods ON payments.paymentMethodId = paymentmethods.id
        LEFT JOIN clients ON payments.clientId = clients.id
        ORDER BY payments.created_at DESC
      `);


      
      let dataJSON = {
        status: 'success',
        data: results
    }
      return dataJSON;
    } catch (err) {
      throw err;
    }
  },
  getPaymentsByInvoiceId: async (invoiceId) => {
    try {
        const [results] = await db.execute(`
            SELECT 
              payments.*, 
              paymentmethods.name AS paymentMethodName, 
              clients.name AS clientName
            FROM payments
            LEFT JOIN paymentmethods ON payments.paymentMethodId = paymentmethods.id
            LEFT JOIN clients ON payments.clientId = clients.id
            WHERE invoiceId = ?
            ORDER BY payments.created_at DESC
        `, [invoiceId]);

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
    const sql = 'UPDATE payments SET clientId = ?, invoiceId = ?, paymentMethodId = ?, amount = ?, date = ?, updated_at = NOW() WHERE id = ?';
    try {
      const [results] = await db.execute(sql, [data.clientId,data.invoiceId,data.paymentMethodId,data.amount,data.date,id]);
      
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
      const [results] = await db.execute('DELETE FROM payments WHERE id = ?', [id]);
      return results;
    } catch (err) {
      throw err;
    }
  },
};

module.exports = payments;
