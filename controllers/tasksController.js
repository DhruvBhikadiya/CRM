const Tasks = require('../models/tasksModel');


exports.createTask = async (req, res) => {
  try {
    const result = await Tasks.create(req.body);
    res.status(201).json({ message: 'Task created', id: result.insertId });
  } catch (err) {
    console.error('Error creating Task:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllTasks = async (req, res) => {
  try {
    const results = await Tasks.getAll();
    res.status(200).json(results);
  } catch (err) {
    console.error('Error fetching Tasks:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getTasksByProjectId = async (req, res) => {
    const projectId = req.params.projectId;
  try {
    const results = await Tasks.getTasksByProjectId(projectId);
    res.status(200).json(results);
  } catch (err) {
    console.error('Error fetching Tasks:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
exports.getTasksByUserId = async (req, res) => {
    const userId = req.params.userId;
  try {
    const results = await Tasks.getTasksByUserId(userId);
    res.status(200).json(results);
  } catch (err) {
    console.error('Error fetching Tasks:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateTask = async (req, res) => {
  const id = req.params.id;
  try {
    await Tasks.update(id, req.body);
    res.status(200).json({ message: 'Task updated' });
  } catch (err) {
    console.error('Error updating Task:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteTask = async (req, res) => {
  const id = req.params.id;
  try {
    await Tasks.delete(id);
    res.status(200).json({ message: 'Task deleted' });
  } catch (err) {
    console.error('Error deleting Task:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
