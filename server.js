// this is for importing modules and other files
const express = require('express');

// we have to import mongoose connection 
const db = require('./config/connection');

// we're importing the main router
const routes = require('./routes');

// We're initializing an instance of express
const app = express();

// This is the default port for our web server.
// process.env.PORT is usually for production environment (like Heroku) where the port is dynamically assigned.
const PORT = process.env.PORT || 3001;

// This is our middleware: 
// express.json() and express.urlencoded() are built-in middleware functions in Express.
// They parse incoming requests with JSON payloads and URL-encoded payloads, respectively.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// With this, we tell our app to use the routes defined in the imported 'routes' module
app.use(routes);

// Establishing connection to the MongoDB database
// Once the database connection is established, our server starts listening for incoming requests.
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`🌍 API server running on port http://localhost:${PORT}`);
    });
})
// Logging any database connection errors
.on('error', (error) => {
    console.error(`🛑 Database connection error: ${error}`);
});
