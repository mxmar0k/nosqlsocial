const mongoose = require('mongoose');

// mongoDB connection
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost/social-network';

// we have to connect to MongoDB using mongoose settings
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/YourDBName', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Export the connection for other files to use
module.exports = mongoose.connection;
