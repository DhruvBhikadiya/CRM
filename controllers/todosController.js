const Todos = require('../models/todosModel');

exports.createTodo = async (req, res) => {
  try {
    const result = await Todos.create(req.body);
    res.status(201).json({ message: 'Todo created', id: result.insertId });
  } catch (err) {
    console.error('Error creating Todo:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllTodos = async (req, res) => {
  try {
    const results = await Todos.getAll();
    res.status(200).json(results);
  } catch (err) {
    console.error('Error fetching Todos:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateTodo = async (req, res) => {
  const id = req.params.id;
  try {
    await Todos.update(id, req.body);
    res.status(200).json({ message: 'Todo updated' });
  } catch (err) {
    console.error('Error updating Todo:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteTodo = async (req, res) => {
  const id = req.params.id;
  try {
    await Todos.delete(id);
    res.status(200).json({ message: 'Todo deleted' });
  } catch (err) {
    console.error('Error deleting Todo:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
