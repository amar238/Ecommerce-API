const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');

//localhost/api/products
// get all products
router.get('/',productController.getAllProducts);
// add product
router.post('/create',productController.addProduct);
// update quantity of product
router.post('/:id/update_quantity/',productController.updateQtyProduct);
// delete product
router.delete('/:id',productController.deleteProduct);

module.exports = router;