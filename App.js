// App.js
const express = require('express');
const bodyParser = require('body-parser');
const ProductManager = require('./ProductManager');
const Product = require('./Product');
const initializeProducts = require('./initializeProducts');

const app = express();
const port = 8080;

app.use(bodyParser.json());

// Rutas


// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

