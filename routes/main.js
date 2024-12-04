// routes/main.js
const express = require('express');
const router = express.Router();
const mainController = require('../controllers/main.controller');

// Mostrar todos los productos
router.get('/product', mainController.showProducts);

// Mostrar un producto específico
router.get('/item/:id', mainController.showProduct);

module.exports = router;
