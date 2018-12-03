const mongoose = require('mongoose')

const Product = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {type:String, required:true},
    price: {type:Number, required:true},
    author: {type:String},
    description: {type:String},
    publisher: {type:String},
    stock: {type:Number}
})

module.exports = mongoose.model('Product', Product)