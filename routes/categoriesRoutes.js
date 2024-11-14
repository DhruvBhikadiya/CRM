const express = require('express');
const router = express.Router();
const CategoriesController = require('../controllers/categoriesController');

router.post('/createCategory', CategoriesController.createCategory);
router.get('/getAllCategories', CategoriesController.getAllCategories);
router.put('/updateCategory/:id', CategoriesController.updateCategory);
router.delete('/deleteCategory/:id', CategoriesController.deleteCategory);

module.exports = router;
