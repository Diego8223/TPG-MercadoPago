// modules/mercadopago.js
const mercadopago = require('mercadopago');

// Configura MercadoPago con tus credenciales
mercadopago.configurations.setAccessToken('TU_ACCESS_TOKEN_DE_MERCADOPAGO');

module.exports = mercadopago;
