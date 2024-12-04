// routes/checkout.js
const express = require('express');
const router = express.Router();
const checkoutController = require('../controllers/checkout.controller');

// Mostrar carrito
router.get('/', checkoutController.showCheckout);

// Agregar un producto al carrito
router.post('/add-to-cart', checkoutController.addToCart);

// Procesar el checkout
router.post('/process', checkoutController.processCheckout);

module.exports = router;
