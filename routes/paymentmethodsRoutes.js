const express = require('express');
const router = express.Router();
const PaymentMethodsController = require('../controllers/paymentmethodsController');

router.post('/createPaymentMethod', PaymentMethodsController.createPaymentMethod);
router.get('/getAllPaymentMethods', PaymentMethodsController.getAllPaymentMethods);
router.put('/updatePaymentMethod/:id', PaymentMethodsController.updatePaymentMethod);
router.delete('/deletePaymentMethod/:id', PaymentMethodsController.deletePaymentMethod);

module.exports = router;
