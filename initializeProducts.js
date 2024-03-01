// initializeProducts.js
const Product = require('./Product');
const ProductManager = require('./ProductManager');

const manager = new ProductManager('productos.json');

const initializeProducts = () => {
  const products = [
    new Product('Manzanas', 'Manzanas frescas de la región', 2.5, '/images/apples.jpg', 'V001', 50),
    // Agrega aquí los otros productos según tu necesidad
  ];

  products.forEach((product) => {
    manager.addProduct(product);
  });

  console.log('Products initialized successfully.');
};

initializeProducts();
