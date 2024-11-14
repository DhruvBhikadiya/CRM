const express = require('express');
const router = express.Router();
const TasksController = require('../controllers/tasksController');

router.post('/createTask', TasksController.createTask);
router.get('/getAllTasks', TasksController.getAllTasks);
router.get('/getTasksByProjectId/:projectId', TasksController.getTasksByProjectId);
router.get('/getTasksByUserId/:userId', TasksController.getTasksByUserId);
router.put('/updateTask/:id', TasksController.updateTask);
router.delete('/deleteTask/:id', TasksController.deleteTask);

module.exports = router;