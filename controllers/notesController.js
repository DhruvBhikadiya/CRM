const Notes = require('../models/notesModel');

exports.createNote = async (req, res) => {
  try {
    const result = await Notes.create(req.body);
    res.status(201).json({ message: 'Note created', id: result.insertId });
  } catch (err) {
    console.error('Error creating note:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllNotes = async (req, res) => {
  try {
    const results = await Notes.getAll();
    res.status(200).json(results);
  } catch (err) {
    console.error('Error fetching notes:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateNote = async (req, res) => {
  const id = req.params.id;
  try {
    await Notes.update(id, req.body);
    res.status(200).json({ message: 'Note updated' });
  } catch (err) {
    console.error('Error updating note:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteNote = async (req, res) => {
  const id = req.params.id;
  try {
    await Notes.delete(id);
    res.status(200).json({ message: 'Note deleted' });
  } catch (err) {
    console.error('Error deleting note:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
