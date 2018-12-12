const express = require('express');
const flats = express();
const models = require('../models');

// index
flats.get('/', (req, res) => {
    models.Flat.findAll()
        .then(flats => {
            res.json(flats);
        });
});

// create
flats.post('/', (req, res) => {
    models.Flat.create(req.body)
        .then(flat => {
            res.json(flat);
        });
});

// show
flats.get('/:id', (req, res) => {
    models.Flat.findById(req.params.id)
        .then(flat => {
            res.json(flat);
        });
});


// update
flats.put('/:id', (req, res) => {
    models.Flat.update(req.body, { where: { id: req.params.id } })
        .then(flat => {
            res.json(flat);
        });
});

// destroy
flats.delete('/:id', (req, res) => {
    models.Flat.destroy({ where: {id: req.params.id}})
        .then(flat => {
            res.json(flat);
    });
});




module.exports = flats;