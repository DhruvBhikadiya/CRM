const express = require('express');
const router = express.Router();
const PaymentsController = require('../controllers/paymentsController');

router.post('/createPayment', PaymentsController.createPayment);
router.get('/getAllPayments', PaymentsController.getAllPayments);
router.get('/getPaymentsByInvoiceId/:invoiceId', PaymentsController.getPaymentsByInvoiceId);
router.put('/updatePayment/:id', PaymentsController.updatePayment);
router.delete('/deletePayment/:id', PaymentsController.deletePayment);

module.exports = router;
