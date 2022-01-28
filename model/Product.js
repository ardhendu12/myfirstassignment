const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    id: Number,
    name: String,
    phoneNumber: Number,
    address: String,
    orderCount: Number,
    orderID: Number,
});

module.exports = mongoose.model("Product", productSchema);