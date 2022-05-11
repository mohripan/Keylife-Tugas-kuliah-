import express from "express";
import dotenv from "dotenv";
import connectDatabase from './config/MongoDb.js';
import ImportData from "./DataImport.js";
import productRoutes from "./router/ProductRoutes.js";
import {errorHandler, notFound} from "./Middleware/Errors.js";
import userRouter from "./router/UserRoutes.js";

dotenv.config();

const app = express();
connectDatabase();

app.use(express.json());

app.use("/api/import", ImportData);
app.use("/api/products", productRoutes);
app.use("/api/users", userRouter);

app.use(notFound);
app.use(errorHandler);

// app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("server running"));

// const db = mysql.createConnection({
//     user: 'root',
//     host: 'localhost',
//     password: '',
//     database: 'employee_system'
// });

// app.post('/create', (req, res, next) => {
//     const name = req.body.name;
//     const age = req.body.age;
//     const country = req.body.country;
//     const position = req.body.position;
//     const wage = req.body.wage;

//     db.query('INSERT INTO employee (name, age, country, position, salary) VALUES (?, ?, ?, ?, ?)', [name, age, country, position, wage], (err, result) => {
//         if (err) {
//             console.log(err);
//         } else{
//             res.send('Values inserted');
//         }
//     });
//     console.log('Halo');
// });

// app.get('/employees', (req, res, next) => {
//     db.query('SELECT * FROM employee', (err, result) => {
//         if (err) {
//             console.log(err);
//         } else {
//             res.send(result);
//         }
//     });
// });

// const express = require('express');

// const app = express();

// const mysql = require('mysql');

// const cors = require('cors');

// app.listen(9000, () => {
//     console.log('Yay');
// });