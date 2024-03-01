// app.js
const express = require('express');
const ProductManager = require('./ProductManager');
const productsData = require('./productsData');

const app = express();
const port = 8080;

const manager = new ProductManager('productos.json');

// Agregar productos a la instancia de ProductManager
productsData.forEach((product) => {
  manager.addProduct(product);
});

// Ruta para obtener todos los productos
app.get('/products', (req, res) => {
  const limit = req.query.limit ? parseInt(req.query.limit) : undefined;
  const products = manager.getProducts(limit);
  res.json(products);
});

// Ruta para obtener un producto por ID
app.get('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = manager.getProductById(productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

