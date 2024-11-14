const Invoices = require('../models/invoicesModel');

exports.createInvoice = async (req, res) => {
  try {
    const result = await Invoices.create(req.body);
    res.status(201).json({ message: 'Invoice created', id: result.insertId });
  } catch (err) {
    console.error('Error creating Invoice:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllInvoices = async (req, res) => {
  try {
    const results = await Invoices.getAll();
    res.status(200).json(results);
  } catch (err) {
    console.error('Error fetching Invoices:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
exports.getInvoicesByClientId = async (req, res) => {
  const clientId = req.params.clientId;
  try {
    const results = await Invoices.getInvoicesByClientId(clientId);
    res.status(200).json(results);
  } catch (err) {
    console.error('Error fetching Invoices:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateInvoice = async (req, res) => {
  const id = req.params.id;
  try {
    await Invoices.update(id, req.body);
    res.status(200).json({ message: 'Invoice updated' });
  } catch (err) {
    console.error('Error updating Invoice:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteInvoice = async (req, res) => {
  const id = req.params.id;
  try {
    await Invoices.delete(id);
    res.status(200).json({ message: 'Invoice deleted' });
  } catch (err) {
    console.error('Error deleting Invoice:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
