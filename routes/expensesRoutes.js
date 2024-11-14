const express = require('express');
const router = express.Router();
const ExpensesController = require('../controllers/expensesController');

router.post('/createExpense', ExpensesController.createExpense);
router.get('/getAllExpenses', ExpensesController.getAllExpenses);
router.put('/updateExpense/:id', ExpensesController.updateExpense);
router.delete('/deleteExpense/:id', ExpensesController.deleteExpense);

module.exports = router;
