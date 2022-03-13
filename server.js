/** @format */

const { booleanParser } = require('config/parser');
const express = require('express');
const res = require('express/lib/response');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

const PORT = process.env.PORT || 5000;

// Init Middleware for req.body
// app.use(booleanParser.json());  // it was seprate package but now included in express
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/post', require('./routes/api/post'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
