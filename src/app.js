// server create karna

const express = require("express");

const app = express ();
app.use(express.json());


const notes = [];

app.post('/notes', (req, res) => {
    notes.push(req.body);

    res.status(201).json({
        message: "note created Successfully"
    });
});

app.get('/notes', (req, res) => {

    res.status(200).json({
        message: "notes fetched succesfully",
        notes: notes 
    });
})

module.exports = app;