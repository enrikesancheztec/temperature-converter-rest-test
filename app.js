const express = require('express');
const morgan = require('morgan');
const db = require("./models");
const apiRoutes = require("./routes/temperature.routes");

// App
const app = express()
// Morgan
app.use(morgan('tiny'))
app.use(express.json());

// Sequelize
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// Add routes
app.use('/', apiRoutes);

// Starting server
const PORT = process.env.PORT || 8080
module.exports = app.listen(PORT);