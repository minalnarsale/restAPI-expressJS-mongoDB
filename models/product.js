const mongoose = require('mongoose');

//mongoose schemas

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  manufacturingDate: {
    type: Date,
    required: true
  },
  expiryDate: {
    type: Date,
    required: true
  },
  dealerName: {
    type: String,
    required: true
  },
  dealerContactNumber: {
    type: String,
    required: true
  },
  registrationDate:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('product', productSchema);
