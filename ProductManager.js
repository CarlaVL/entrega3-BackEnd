// ProductManager.js
const fs = require('fs/promises');

class ProductManager {
  constructor(productsFilePath) {
    this.productsFilePath = productsFilePath;
  }

  async loadProducts() {
    try {
      const data = await fs.readFile(this.productsFilePath, 'utf8');
      return JSON.parse(data) || [];
    } catch (error) {
      console.error(`Error loading products from file: ${error.message}`);
      return [];
    }
  }

  async saveProducts(products) {
    try {
      await fs.writeFile(this.productsFilePath, JSON.stringify(products, null, 2), 'utf8');
    } catch (error) {
      console.error(`Error saving products to file: ${error.message}`);
    }
  }

  generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  async addProduct(product) {
    product.id = this.generateId();

    try {
      const products = await this.loadProducts();
      products.push(product);
      await this.saveProducts(products);
      console.log(`Product '${product.title}' added successfully.`);
    } catch (error) {
      console.error(`Error adding product: ${error.message}`);
    }
  }

  async getProductById(productId) {
    try {
      const products = await this.loadProducts();
      return products.find((product) => product.id === productId);
    } catch (error) {
      console.error(`Error getting product by ID: ${error.message}`);
      return null;
    }
  }

  async updateProduct(productId, updatedFields) {
    try {
      const products = await this.loadProducts();
      const index = products.findIndex((product) => product.id === productId);

      if (index !== -1) {
        products[index] = { ...products[index], ...updatedFields };
        await this.saveProducts(products);
        console.log(`Product with ID ${productId} updated successfully.`);
      } else {
        console.log(`Product with ID ${productId} not found.`);
      }
    } catch (error) {
      console.error(`Error updating product: ${error.message}`);
    }
  }

  async deleteProduct(productId) {
    try {
      const products = await this.loadProducts();
      const index = products.findIndex((product) => product.id === productId);

      if (index !== -1) {
        const deletedProduct = products.splice(index, 1)[0];
        await this.saveProducts(products);
        console.log(`Product with ID ${productId} deleted successfully.`);
        return deletedProduct;
      } else {
        console.log(`Product with ID ${productId} not found.`);
        return null;
      }
    } catch (error) {
      console.error(`Error deleting product: ${error.message}`);
      return null;
    }
  }

  async listProducts() {
    try {
      const products = await this.loadProducts();
      console.log("Product List:");
      products.forEach((product) => {
        console.log(product);
      });
    } catch (error) {
      console.error(`Error listing products: ${error.message}`);
    }
  }

  async getProducts(limit) {
    try {
      const products = await this.loadProducts();
      return limit ? products.slice(0, limit) : products;
    } catch (error) {
      console.error(`Error getting products: ${error.message}`);
      return [];
    }
  }
}

module.exports = ProductManager;
