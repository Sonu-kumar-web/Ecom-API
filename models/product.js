const mongoose=require('mongoose');

//defining the schema
const ProductSchema=new mongoose.Schema({
   
    name:{
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    
}, {
    timestamps: true
});

const Product = mongoose.model('Product', ProductSchema);
module.exports= Product;