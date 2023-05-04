const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const userRoutes = require('./routes/userRoutes');
const pollRoutes = require('./routes/pollRoutes');
const itemRoutes = require('./routes/itemRoutes');

app.use('/user', userRoutes);
app.use('/poll', pollRoutes);
app.use('/item', itemRoutes)

module.exports = app;