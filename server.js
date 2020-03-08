const express = require('express');
const app = express();
const port = 4000;
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//middleware : serving static folder
app.use(express.static(path.join(__dirname, 'dist')));

//connection to mongoDB
mongoose.connect('mongodb+srv://root:root@' +
'medicaldatabase-dev-ofefd.mongodb.net/medicalDatabase?' +
'retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
let mongoDB = mongoose.connection;
mongoDB.on('error', (error) => {
  console.log('error while connecting to mongoDB');
});
mongoDB.once('open', (err, req) => {
  console.log('connection to mongoDB is working');
});

//middleware : body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//middleware : serving REST API routes
app.use('/api/product', require('./routes/product.js'));

//server
app.listen(port, (err) => {
  if(err) {
    console.log('something went wrong while starting server.');
  }
  console.log('server started successfully.');
});
