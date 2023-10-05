// this is for importing modules and other files
const express = require('express');
const db = require();
const routes = require();

// we initializing an instance of express
const app = express();

// this is the default port for our web server
// process.env.PORT is usually for production environment
const PORT = process.env.PORT || 3001;

// this is our middleware: 
// express.json and express.urlencoded are built-in middleware functions for json and urlencoded daata
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// with this we tell our app to use the imported routes
app.use(routes);

// we have to connect to the MongoDB

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });

