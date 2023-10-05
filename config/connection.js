const mongoose = require('mongoose');

// mongoDB connection
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost/social-network';

// we have to connect to MongoDB using mongoose settings
//we are using deprecation warnings
mongoose.connect(connectionString, {
  useFindAndModify: false,
  // warning for findOneAndUpdate, findOneAndDelete
  useNewUrlParser: true,
  // warning for current URL string parser
  useUnifiedTopology: true,
  // warning for current Server
  useCreateIndex: true
  // warning for collection.ensureIndex
});

// Export the connection for other files to use
module.exports = mongoose.connection;
