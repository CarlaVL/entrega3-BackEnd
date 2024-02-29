const express = require('express');
const fs = require('fs'); // Añade esta línea para importar fs

const app = express();
const port = 3000;

class Product {
  constructor(title, description, price, thumbnail, code, stock) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
  }
}

class ProductManager {
  constructor(filePath) {
    this.path = filePath;
    this.products = this.loadProducts();
  }

  // Métodos restantes de la clase ProductManager...

  getProducts(limit) {
    let result = this.products;
    if (limit) {
      result = result.slice(0, limit);
    }
    return result;
  }
}

const manager = new ProductManager('productos.json');

app.get('/products', (req, res) => {
  const limit = req.query.limit ? parseInt(req.query.limit) : undefined;
  const products = manager.getProducts(limit);
  res.json(products);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
