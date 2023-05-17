require('dotenv').config();

const mongoString = process.env.DATABASE_URL;
const express = require('express');
const mongoose = require('mongoose');

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
const routes = require('./routes/routes');
const bodyParser  = require('body-parser');

app.use(bodyParser.json());
app.use('/api', routes)
app.use(express.json());

app.listen(4000, () => {
    console.log(`Server Started at ${4000}`)
})