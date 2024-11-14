const db = require('../config/db');

const Tasks = {
  create: async (data) => {
    const sql = 'INSERT INTO tasks (title,projectId,userId,status,description,startDate, created_at, updated_at) VALUES (?,?,?,?,?,?, NOW(), NOW())';
    try {
      const [results] = await db.execute(sql, [data.title, data.projectId, data.userId, data.status, data.description, data.startDate]);

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
          tasks.*, 
          users.name AS userName, 
          projects.name AS projectName
        FROM tasks
        LEFT JOIN users ON tasks.userId = users.id
        LEFT JOIN projects ON tasks.projectId = projects.id
         ORDER BY created_at DESC
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
  getTasksByProjectId: async (projectId) => {
    try {
      if (!projectId) {
        throw new Error('Project ID is required');
      }

      const [results] = await db.execute(`
        SELECT
          tasks.*, 
          users.name AS userName, 
          projects.name AS projectName
        FROM tasks
        LEFT JOIN users ON tasks.userId = users.id
        LEFT JOIN projects ON tasks.projectId = projects.id
        WHERE tasks.projectId = ?
         ORDER BY created_at DESC
      `, [projectId]);

      let dataJSON = {
        status: 'success',
        data: results
      };

      return dataJSON;

    } catch (err) {
      throw err;
    }
  },
  getTasksByUserId: async (userId) => {
    try {
      if (!userId) {
        throw new Error('Project ID is required');
      }

      const [results] = await db.execute(`
        SELECT
          tasks.*, 
          users.name AS userName, 
          projects.name AS projectName
        FROM tasks
        LEFT JOIN users ON tasks.userId = users.id
        LEFT JOIN projects ON tasks.userId = projects.id
        WHERE tasks.userId = ?
         ORDER BY created_at DESC
      `, [userId]);

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
    const sql = 'UPDATE tasks SET title = ?, projectId = ?, userId = ?, status = ?, description = ?, startDate = ?, updated_at = NOW() WHERE id = ?';
    try {
      const [results] = await db.execute(sql, [data.title, data.projectId, data.userId, data.status, data.description, data.startDate, id]);

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
      const [results] = await db.execute('DELETE FROM tasks WHERE id = ?', [id]);
      return results;
    } catch (err) {
      throw err;
    }
  },
};

module.exports = Tasks;
