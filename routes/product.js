const express = require('express');
const router = express.Router();
const Product = require('../models/product');

//routes
//saving product details in database
router.post('/', (req, res) => {

  let product = new Product({
    name: req.body.name,
    price: req.body.price,
    quantity: req.body.quantity,
    manufacturingDate: req.body.manufacturingDate,
    expiryDate: req.body.expiryDate,
    dealerName: req.body.dealerName,
    dealerContactNumber: req.body.dealerContactNumber,
    registrationDate: req.body.registrationDateregistrationDate
  });

  product.save((err, result) => {
    if(err) {
      res.status(500).json({'message':'problem in saving product details'});
    }
    else {
      res.status(200).json({'message':'product detail has saved'});
    }
  });
});

//getting all product details from database
router.get('/all', (req, res) => {
  Product.find((err, result) => {
    if(err) {
      res.status(500).json({'message':'problem in getting product details'});
    }
    else {
      res.status(200).json(result);
    }
  });
});

//getting a product detail from database
router.get('/:productId', (req, res) => {
  Product.findOne({ _id: req.params.productId}, (err, result) => {
    if(err) {
      res.status(500).json({'message':'problem in getting an product detail'});
    }
    else {
      res.status(200).json(result);
    }
  });
});

//updating a product detail in database
router.put('/:productId', (req, res) => {
  Product.updateOne({ _id: req.params.productId}, req.body, (err, result) => {
    if(err) {
      res.status(500).json({'message':'problem in updating product details'});
    }
    else {
      res.status(200).json({'message': req.params.productId +' product is updated'});
    }
  });
});

//deleting a product from database
router.delete('/:productId', (req, res) => {
  Product.deleteOne({ _id: req.params.productId}, (err, result) => {
    if(err) {
      res.status(500).json({'message':'problem in deleting a product'});
    }
    else {
      res.status(200).json({'message': req.params.productId +' product is deleted'});
    }
  });
});

module.exports = router;
