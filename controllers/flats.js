const express = require('express'); // importálja az express npm csomagot
const models = require('../models'); // importálja a models mappa tartalmát
const flats = express();  // flats változóban tárolja a lefuttatott express értékét

// index
flats.get('/', (req, res) => {      // a / route-ra érkező get request esetén
    models.Flat.findAll()           // minden lakást lekér
        .then(flats => {
            res.json(flats);        // a response-ban json formátumban elküldi a lekérés eredményét
        });
});

// create
flats.post('/', (req, res) => {     // a / route-ra érkező post request esetén
    models.Flat.create(req.body)    // létrehozza a req.body-ban kapott adatok alapján az új rekordot
        .then(flat => {
            res.json(flat);         // json formátumban elküldi a létrehozott rekord adatait
        });
});

// show
flats.get('/:id', (req, res) => {   // a /:id route-ra érkező get request esetén (itt az :id a req.params.id)
    models.Flat.findById(req.params.id) // megkeresi a req.params.id alapján a rekordot
        .then(flat => {
            res.json(flat);             // json formátumban elküldi a lekért rekord adatait
        });
});


// update
flats.put('/:id', (req, res) => {       // a /:id route-ra érkező put request esetén (itt az :id a req.params.id)
    models.Flat.update(req.body, { where: { id: req.params.id } }) // update-eli a rekordot a request bodyjában kapott adatokkal, annál a rekordnál, ahol az id a request paraméterben kapott id
        .then(flat => {
            res.json(flat);             
        });
});

// destroy
flats.delete('/:id', (req, res) => {        // a /:id route-ra érkező delete request esetén (itt az :id a req.params.id)
    models.Flat.destroy({ where: {id: req.params.id}}) // törli a rekordot, ahol az id egyezik a request paraméterben kapott id-val
        .then(flat => {
            res.json(flat);
    });
});




module.exports = flats;  // exportálja a flats értékét (ezt húzza be az index.js)