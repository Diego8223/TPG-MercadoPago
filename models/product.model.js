const fs = require('fs');
const path = require('path');

const productFilePath = path.join(__dirname, '../data/product.json');

const productModel = {
  getAllProducts: () => {
    const data = fs.readFileSync(productFilePath);
    return JSON.parse(data);
  },

  getProductById: (id) => {
    const products = productModel.getAllProducts();
    return products.find(product => product.id === parseInt(id));
  }
};

module.exports = productModel;
