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

// show
flats.get('/:id', (req, res) => {
    models.Flat.findById(req.params.id)
        .then(flat => {
            res.json(flat);
        });
});

// create
flats.post('/', (req, res) => {
    models.Flat.create(req.body)
        .then(flat => {
            res.json(flat);
        });
});



module.exports = flats;