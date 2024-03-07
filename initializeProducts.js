// initializeProducts.js
const ProductManager = require('./ProductManager');
const Product = require('./Product');

const manager = new ProductManager('productos.json');

// Agregar productos de prueba
const productsData = require('./productsData');

productsData.forEach((product) => {
  manager.addProduct(new Product(
    product.title,
    product.description,
    product.code,
    product.price,
    product.stock,
    product.category,
    product.thumbnails
  ));
});
