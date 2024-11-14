const express = require('express');
const router = express.Router();
const ClientsController = require('../controllers/clientsController');

router.post('/createClient', ClientsController.createClient);
router.get('/getAllClients', ClientsController.getAllClients);
router.put('/updateClient/:id', ClientsController.updateClient);
router.delete('/deleteClient/:id', ClientsController.deleteClient);

module.exports = router;
