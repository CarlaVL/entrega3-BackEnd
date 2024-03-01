// productsData.js
const Product = require('./Product');

const products = [
  new Product('Manzanas', 'Manzanas frescas de la región', 2.5, '/images/apples.jpg', 'V001', 50),
  new Product('Bananas', 'Bananas maduras y sabrosas', 1.8, '/images/bananas.jpg', 'V002', 40),
  new Product('Zanahorias', 'Zanahorias orgánicas y crujientes', 1.2, '/images/carrots.jpg', 'V003', 30),
  new Product('Tomates', 'Tomates jugosos y rojos', 3, '/images/tomatoes.jpg', 'V004', 25),
  new Product('Papas', 'Papas frescas y listas para cocinar', 2, '/images/potatoes.jpg', 'V005', 35),
  new Product('Lechuga', 'Lechuga hidropónica de calidad', 2.8, '/images/lettuce.jpg', 'V006', 20),
  new Product('Cebollas', 'Cebollas amarillas y sabrosas', 1.5, '/images/onions.jpg', 'V007', 45),
  new Product('Pimientos', 'Pimientos rojos y verdes', 4, '/images/peppers.jpg', 'V008', 28),
  new Product('Espinacas', 'Espinacas frescas y nutritivas', 2.3, '/images/spinach.jpg', 'V009', 22),
  new Product('Ajos', 'Ajos orgánicos para dar sabor a tus platos', 1.7, '/images/garlic.jpg', 'V010', 33),
];

module.exports = products;
