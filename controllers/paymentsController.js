const Payments = require('../models/paymentsModel');


exports.createPayment = async (req, res) => {
  try {
    const result = await Payments.create(req.body);
    res.status(201).json({ message: 'Payment created', id: result.insertId });
  } catch (err) {
    console.error('Error creating Payment:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllPayments = async (req, res) => {
  try {
    const results = await Payments.getAll();
    res.status(200).json(results);
  } catch (err) {
    console.error('Error fetching Payments:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updatePayment = async (req, res) => {
  const id = req.params.id;
  try {
    await Payments.update(id, req.body);
    res.status(200).json({ message: 'Payment updated' });
  } catch (err) {
    console.error('Error updating Payment:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
exports.getPaymentsByInvoiceId = async (req, res) => {
  const invoiceId = req.params.invoiceId;
  try {
    const results = await Payments.getPaymentsByInvoiceId(invoiceId);
    res.status(200).json(results);
  } catch (err) {
    console.error('Error fetching Invoices:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deletePayment = async (req, res) => {
  const id = req.params.id;
  try {
    await Payments.delete(id);
    res.status(200).json({ message: 'Payment deleted' });
  } catch (err) {
    console.error('Error deleting Payment:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
