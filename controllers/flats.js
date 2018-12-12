const express = require('express');
const flats = express();
const models = require('../models');

// index
flats.get('/', (req,res) => {
    models.Flat.findAll()
        .then(flats => {
            res.json(flats);
        });
});



module.exports = flats;