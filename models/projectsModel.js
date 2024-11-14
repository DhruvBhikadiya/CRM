const db = require('../config/db');

const Projects = {
  create: async (data) => {
    const sql = 'INSERT INTO projects (name, amount, users, clientId, categoryId, startDate, endDate, status, priority, note, created_at, updated_at) VALUES (?, ?, ?,?, ?, ?, ?, ?, ?, ?, NOW(), NOW())';
    try {
      const [results] = await db.execute(sql, [data.name, data.amount, JSON.stringify(data.users),data.clientId, data.categoryId, data.startDate, data.endDate, data.status, data.priority, data.note]);
      
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
      const [projects] = await db.execute('SELECT * FROM projects ORDER BY created_at DESC');
      
      const projectsWithDetails = [];
  
      for (let project of projects) {
        const [clientData] = await db.execute('SELECT name FROM clients WHERE id = ?', [project.clientId]);
        const clientName = clientData.length > 0 ? clientData[0].name : null;

        const [categoryData] = await db.execute('SELECT name FROM categories WHERE id = ?', [project.categoryId]);
        const categoryName = categoryData.length > 0 ? categoryData[0].name : null;
        
        const userIds = JSON.parse(project.users);
  
        const usersData = [];
        for (let userId of userIds) {
          const [userData] = await db.execute('SELECT * FROM users WHERE id = ?', [userId]);
          if (userData.length > 0) {
            usersData.push(userData[0]);
          }
        }
  
        projectsWithDetails.push({
          ...project,
          clientName,
          categoryName,
          usersData  
        });
      }
  
      return {
        status: 'success',
        data: projectsWithDetails
      };
      
    } catch (err) {
      throw err;
    }
  },

  getProjectsByClientId: async (clientId) => {
    try {
      const [results] = await db.execute('SELECT * FROM projects WHERE clientId = ? ORDER BY created_at DESC', [clientId]);

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
    const sql = 'UPDATE projects SET name = ?, amount = ?, users = ?, clientId = ?, categoryId = ?, startDate = ?, endDate = ?, status = ?, priority = ?,note = ?, updated_at = NOW() WHERE id = ?';
    try {
      const [results] = await db.execute(sql, [data.name, data.amount, data.users, data.clientId, data.categoryId, data.startDate, data.endDate, data.status, data.priority, data.note, id]);
      
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
      const [results] = await db.execute('DELETE FROM projects WHERE id = ?', [id]);
      return results;
    } catch (err) {
      throw err;
    }
  },
};

module.exports = Projects;