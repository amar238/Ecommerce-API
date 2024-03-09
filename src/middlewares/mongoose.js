const mongoose = require('mongoose');

                //Input your  mongo db address
mongoose.connect('mongodb://localhost:27017/Ecommerce');

const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error in connceting db"));

db.once('open',()=>{
    console.log(db._connectionString);
})

module.exports = db;