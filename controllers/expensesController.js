const Expenses = require('../models/expensesModel');

exports.createExpense = async (req, res) => {
  try {
    const result = await Expenses.create(req.body);
    res.status(201).json({ message: 'Expense created', id: result.insertId });
  } catch (err) {
    console.error('Error creating Expense:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllExpenses = async (req, res) => {
  try {
    const results = await Expenses.getAll();
    res.status(200).json(results);
  } catch (err) {
    console.error('Error fetching Expenses:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateExpense = async (req, res) => {
  const id = req.params.id;
  try {
    await Expenses.update(id, req.body);
    res.status(200).json({ message: 'Expense updated' });
  } catch (err) {
    console.error('Error updating Expense:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteExpense = async (req, res) => {
  const id = req.params.id;
  try {
    await Expenses.delete(id);
    res.status(200).json({ message: 'Expense deleted' });
  } catch (err) {
    console.error('Error deleting Expense:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
