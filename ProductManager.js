// ProductManager.js
const fs = require('fs');

class ProductManager {
  constructor(filePath) {
    this.path = filePath;
    this.products = this.loadProducts();
  }

  loadProducts() {
    try {
      const data = fs.readFileSync(this.path, 'utf8');
      return JSON.parse(data) || [];
    } catch (error) {
      console.error(`Error loading products from file: ${error.message}`);
      return [];
    }
  }

  saveProducts() {
    try {
      const data = JSON.stringify(this.products, null, 2);
      fs.writeFileSync(this.path, data, 'utf8');
    } catch (error) {
      console.error(`Error saving products to file: ${error.message}`);
    }
  }

  generateId() {
    return this.products.length + 1;
  }

  addProduct(product) {
    product.id = this.generateId();
    this.products.push(product);
    this.saveProducts();
    console.log(`Product '${product.title}' added successfully.`);
  }

  getProductById(productId) {
    const foundProduct = this.products.find((product) => product.id === productId);
    return foundProduct;
  }

  updateProduct(productId, updatedProduct) {
    const index = this.products.findIndex((product) => product.id === productId);
    if (index !== -1) {
      this.products[index] = { ...this.products[index], ...updatedProduct };
      this.saveProducts();
      console.log(`Product with ID ${productId} updated successfully.`);
    } else {
      console.log(`Product with ID ${productId} not found.`);
    }
  }

  deleteProduct(productId) {
    const index = this.products.findIndex((product) => product.id === productId);
    if (index !== -1) {
      const deletedProduct = this.products.splice(index, 1)[0];
      this.saveProducts();
      console.log(`Product with ID ${productId} deleted successfully.`);
      return deletedProduct;
    } else {
      console.log(`Product with ID ${productId} not found.`);
      return null;
    }
  }

  listProducts() {
    console.log("Product List:");
    this.products.forEach((product) => {
      console.log(product);
    });
  }

  getProducts(limit) {
    let result = this.products;
    if (limit) {
      result = result.slice(0, limit);
    }
    return result;
  }
}

module.exports = ProductManager;
