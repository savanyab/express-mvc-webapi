const express = require('express');
const app = express();
const flats = require('./controllers/flats');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/flats', flats);

app.listen(process.env.PORT, () => {
    console.log("Running...")
  });