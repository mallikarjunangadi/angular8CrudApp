let mongoose = require("mongoose");

let definition = {
    ProductName: {
        type: String
    },
    ProductDescription: {
        type: String
    },
    ProductPrice: {
        type: Number
    }
};

let schema = new mongoose.Schema(definition);
let productModel = mongoose.model("Product", schema);

module.exports = {
    productModel: productModel
}