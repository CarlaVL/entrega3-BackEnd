const express = require('express');
const bodyParser = require('body-parser');
const ProductManager = require('./ProductManager');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const manager = new ProductManager('productos.json');

app.get('/products', (req, res) => {
  const limit = req.query.limit ? parseInt(req.query.limit) : undefined;
  const products = manager.getProducts(limit);
  res.json(products);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
