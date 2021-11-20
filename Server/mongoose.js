const mongoose = require('mongoose');

// const config = require('./config');


// connect to mongo db
const mongoUri = 'mongodb://localhost/white-rabbit';
mongoose.connect(mongoUri);
mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${mongoUri}`);
});
mongoose.connection.on('success', () => {
    console.log('mongo connected')
});