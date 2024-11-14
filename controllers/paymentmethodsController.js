const PaymentMethods = require('../models/paymentmethodsModel');


exports.createPaymentMethod = async (req, res) => {
  try {
    const result = await PaymentMethods.create(req.body);
    res.status(201).json({ message: 'PaymentMethod created', id: result.insertId });
  } catch (err) {
    console.error('Error creating PaymentMethod:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllPaymentMethods = async (req, res) => {
  try {
    const results = await PaymentMethods.getAll();
    res.status(200).json(results);
  } catch (err) {
    console.error('Error fetching PaymentMethods:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updatePaymentMethod = async (req, res) => {
  const id = req.params.id;
  try {
    await PaymentMethods.update(id, req.body);
    res.status(200).json({ message: 'PaymentMethod updated' });
  } catch (err) {
    console.error('Error updating PaymentMethod:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deletePaymentMethod = async (req, res) => {
  const id = req.params.id;
  try {
    await PaymentMethods.delete(id);
    res.status(200).json({ message: 'PaymentMethod deleted' });
  } catch (err) {
    console.error('Error deleting PaymentMethod:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
