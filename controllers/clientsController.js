const Clients = require('../models/clientsModel');

exports.createClient = async (req, res) => {
  try {
    const result = await Clients.create(req.body);
    res.status(201).json({ message: 'Client created', id: result.insertId });
  } catch (err) {
    console.error('Error creating Client:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllClients = async (req, res) => {
  try {
    const results = await Clients.getAll();
    res.status(200).json(results);
  } catch (err) {
    console.error('Error fetching Clients:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateClient = async (req, res) => {
  const id = req.params.id;
  try {
    await Clients.update(id, req.body);
    res.status(200).json({ message: 'Client updated' });
  } catch (err) {
    console.error('Error updating Client:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteClient = async (req, res) => {
  const id = req.params.id;
  try {
    await Clients.delete(id);
    res.status(200).json({ message: 'Client deleted' });
  } catch (err) {
    console.error('Error deleting Client:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
