const Categories = require('../models/categoriesModel');

exports.createCategory = async (req, res) => {
  try {
    const result = await Categories.create(req.body);
    res.status(201).json({ message: 'Category created', id: result.insertId });
  } catch (err) {
    console.error('Error creating Category:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllCategories = async (req, res) => {
  try {
    const results = await Categories.getAll();
    res.status(200).json(results);
  } catch (err) {
    console.error('Error fetching Categories:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateCategory = async (req, res) => {
  const id = req.params.id;
  try {
    await Categories.update(id, req.body);
    res.status(200).json({ message: 'Category updated' });
  } catch (err) {
    console.error('Error updating Category:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteCategory = async (req, res) => {
  const id = req.params.id;
  try {
    await Categories.delete(id);
    res.status(200).json({ message: 'Category deleted' });
  } catch (err) {
    console.error('Error deleting Category:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
