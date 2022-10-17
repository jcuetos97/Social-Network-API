const { connect, connection } = require('mongoose');

const connectionString =  process.env.MONGODB_URI || 'mongodb://localhost:27017/socialnetDB';

// Wrap Mongoose around local connection to MongoDB
connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Export connection
module.exports = connection;