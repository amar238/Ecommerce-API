const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }   
},{
    timestamps: true
});

// const Product = mongoose.model("Product",productSchema); 
// module.exports = Product;
module.exports = mongoose.model("Product",productSchema);