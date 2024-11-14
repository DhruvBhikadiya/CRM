const express = require('express');
const router = express.Router();
const InvoicesController = require('../controllers/invoicesController');

router.post('/createInvoice', InvoicesController.createInvoice);
router.get('/getAllInvoices', InvoicesController.getAllInvoices);
router.get('/getInvoicesByClientId/:clientId', InvoicesController.getInvoicesByClientId);
router.put('/updateInvoice/:id', InvoicesController.updateInvoice);
router.delete('/deleteInvoice/:id', InvoicesController.deleteInvoice);

module.exports = router;
