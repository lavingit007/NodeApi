const express = require('express');

const mongoose = require('mongoose');

const app = express();

require('../src/db/conn');

const City = require('../src/models/City');

const port = process.env.PORT || 3000;

// find single

app.get('/city/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const cityData = await City.findById({ _id });
        console.log(cityData);
        if (!cityData) {
            return res.status(404).send();
        } else {
            res.send(cityData);
        }
    } catch (e) {
        res.send(e);
    }
});

// find all
/*
app.get('/City', async (req, res) => {
    try {
        const getcity = await City.find();
        res.send(getcity);
    } catch (e) {
        res.send(e);
    }
});

*/
app.listen(port, () => {
    console.log(`app listening on port:${port}`);
});
