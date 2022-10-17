// Dependencies declared
const express = require ('express');
const db = require('./config/connection');
const routes = require('./routes');

// App and Port created
const app = express();
const PORT = process.env.PORT || 3001;

// Express middleware functions
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Run server
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  })
});