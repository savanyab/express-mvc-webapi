const express = require('express');
const app = express();
const flats = require('./controllers/flats');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/flats', flats);    // a controller prefixelése 

app.listen(process.env.PORT, () => { // a PORT környezeti változóban kapott porton figyel az alkalmazás
    console.log("Running...")
  });