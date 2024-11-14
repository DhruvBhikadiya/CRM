const express = require('express');
const router = express.Router();
const TodosController = require('../controllers/todosController');

router.post('/createTodo', TodosController.createTodo);
router.get('/getAllTodos', TodosController.getAllTodos);
router.put('/updateTodo/:id', TodosController.updateTodo);
router.delete('/deleteTodo/:id', TodosController.deleteTodo);

module.exports = router;