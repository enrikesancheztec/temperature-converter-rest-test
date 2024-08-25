const express = require('express');
const morgan = require('morgan');
const apiRoutes = require("./routes/temperature.routes");

// App
const app = express()
// Morgan
app.use(morgan('tiny'))
app.use(express.json());

// Add routes
app.use('/', apiRoutes);

// Starting server
const PORT = process.env.PORT || 8080
module.exports = app.listen(PORT);