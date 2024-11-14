const Projects = require('../models/projectsModel');

exports.createProject = async (req, res) => {
  try {
    const result = await Projects.create(req.body);
    res.status(201).json({ message: 'Project created', id: result.insertId });
  } catch (err) {
    console.error('Error creating Project:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllProjects = async (req, res) => {
  try {
    const results = await Projects.getAll();
    res.status(200).json(results);
  } catch (err) {
    console.error('Error fetching Projects:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getProjectsByClientId = async (req, res) => {
  const clientId = req.params.clientId;
  try {
    const results = await Projects.getProjectsByClientId(clientId);
    res.status(200).json(results);
  } catch (err) {
    console.error('Error fetching Projects:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateProject = async (req, res) => {
  const id = req.params.id;
  try {
    await Projects.update(id, req.body);
    res.status(200).json({ message: 'Project updated' });
  } catch (err) {
    console.error('Error updating Project:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteProject = async (req, res) => {
  const id = req.params.id;
  try {
    await Projects.delete(id);
    res.status(200).json({ message: 'Project deleted' });
  } catch (err) {
    console.error('Error deleting Project:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
