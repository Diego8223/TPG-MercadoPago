// controllers/checkout.controller.js

// Mostrar el carrito
const showCheckout = (req, res) => {
    const cart = req.session.cart || [];
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0); // Calcular el total
    res.render('checkout', { cart, total });
};

// Agregar un producto al carrito
const addToCart = (req, res) => {
    const { id, name, price, quantity } = req.body;
    const cart = req.session.cart || [];
    const product = { id, name, price, quantity: parseInt(quantity) };

    // Verificar si el producto ya está en el carrito
    const existingProductIndex = cart.findIndex(item => item.id === id);
    if (existingProductIndex > -1) {
        cart[existingProductIndex].quantity += product.quantity; // Si ya existe, sumar cantidad
    } else {
        cart.push(product); // Si no existe, agregar nuevo producto
    }

    req.session.cart = cart; // Guardar el carrito en la sesión
    res.status(200).send('Producto agregado al carrito');
};

// Procesar el checkout (pago, etc.)
const processCheckout = (req, res) => {
    // Aquí se puede integrar con sistemas de pago como MercadoPago, Stripe, etc.
    req.session.cart = []; // Limpiar el carrito después de la compra
    res.redirect('/home'); // Redirigir a la página principal
};

module.exports = {
    showCheckout,
    addToCart,
    processCheckout
};
