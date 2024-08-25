const express = require('express');
const morgan = require('morgan');

// App
const app = express()
// Morgan
app.use(morgan('tiny'))
app.use(express.json());

// Starting server
const PORT = process.env.PORT || 8080
module.exports = app.listen(PORT);