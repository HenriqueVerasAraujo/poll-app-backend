const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const userRoutes = require('./routes/userRoutes')

app.use('/user', userRoutes);

module.exports = app;