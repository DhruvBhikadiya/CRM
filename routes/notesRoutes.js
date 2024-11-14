const express = require('express');
const router = express.Router();
const notesController = require('../controllers/notesController');

router.post('/createNote', notesController.createNote);
router.get('/getAllNotes', notesController.getAllNotes);
router.put('/updateNote/:id', notesController.updateNote);
router.delete('/deleteNote/:id', notesController.deleteNote);

module.exports = router;
