const Meetings = require('../models/meetingsModel');

exports.createMeeting = async (req, res) => {
  try {
    const result = await Meetings.create(req.body);
    res.status(201).json({ message: 'Meeting created', id: result.insertId });
  } catch (err) {
    console.error('Error creating Meeting:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllMeetings = async (req, res) => {
  try {
    const results = await Meetings.getAll();
    res.status(200).json(results);
  } catch (err) {
    console.error('Error fetching Meetings:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateMeeting = async (req, res) => {
  const id = req.params.id;
  try {
    await Meetings.update(id, req.body);
    res.status(200).json({ message: 'Meeting updated' });
  } catch (err) {
    console.error('Error updating Meeting:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteMeeting = async (req, res) => {
  const id = req.params.id;
  try {
    await Meetings.delete(id);
    res.status(200).json({ message: 'Meeting deleted' });
  } catch (err) {
    console.error('Error deleting Meeting:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
