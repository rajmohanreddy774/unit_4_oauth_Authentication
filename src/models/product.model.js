
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    Title : {type : String, required : true},
    Price : {type : Number, required : true},
    User_id : {type : mongoose.Schema.Types.ObjectId, ref:"user", required : true}
},{
    timestamps : true,
    versionKey : false,
})


const Product = mongoose.model("product", productSchema)

module.exports = Product;