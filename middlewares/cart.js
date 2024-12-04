const cartMiddleware = (req, res, next) => {
    // Verifica el carrito en la sesión
    if (!req.session.cart) {
      req.session.cart = [];
    }
    next();
  };
  
  module.exports = cartMiddleware;
  