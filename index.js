require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const routes = require('./routes/routes');
const bodyParser  = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use('/api', routes);
app.use(express.json());

const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.listen(4000, () => {
    console.log(`Server Started at ${4000}`)
})