const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    name:{
        type: String
    },

});
const cartModel = mongoose.model("carts", cartSchema);
module.exports = cartModel