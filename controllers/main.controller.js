const products = require('../data/products.json'); // Asegúrate de que la ruta y el archivo JSON estén correctos

// Mostrar todos los productos
const showProducts = (req, res) => {
    res.render('product', { products });
};

// Mostrar detalles de un producto
const showProduct = (req, res) => {
    const productId = parseInt(req.params.id, 10); // Convertir el ID a número
    const product = products.find(p => p.id === productId);

    if (product) {
        res.render('item', { product });
    } else {
        res.status(404).send('Producto no encontrado');
    }
};

module.exports = {
    showProducts,
    showProduct
};
