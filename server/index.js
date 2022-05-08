import express from "express";
import products from "./data/Products.js";

const app = express();

app.get("/api/products", (req, res) => {
    res.json(products);
});

app.get("/api/products/:id", (req, res) => {
    const product = products.find(p => p._id === req.params.id);
    res.json(product);
});

app.get("/", (req, res) => {
    res.send("API is running");
});

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'employee_system'
});

app.post('/create', (req, res, next) => {
    const name = req.body.name;
    const age = req.body.age;
    const country = req.body.country;
    const position = req.body.position;
    const wage = req.body.wage;

    db.query('INSERT INTO employee (name, age, country, position, salary) VALUES (?, ?, ?, ?, ?)', [name, age, country, position, wage], (err, result) => {
        if (err) {
            console.log(err);
        } else{
            res.send('Values inserted');
        }
    });
    console.log('Halo');
});

app.get('/employees', (req, res, next) => {
    db.query('SELECT * FROM employee', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.listen(5000, console.log("server running"));

// const express = require('express');

// const app = express();

// const mysql = require('mysql');

// const cors = require('cors');

// app.listen(9000, () => {
//     console.log('Yay');
// });