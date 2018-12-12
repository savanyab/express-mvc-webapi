const express = require('express');
const app = express();
const flats = require('./controllers/flats');


app.use('/flats', flats);

app.listen(process.env.PORT, () => {
    console.log("Running...")
  });