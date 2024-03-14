const mongoose = require("mongoose");

const petToysSchema = new mongoose.Schema({
    name:String,
    type:String,
    rating:{
        stars:Number,
        noOfReviews:Number
    }
})

const petToysModal = mongoose.model("pettoys",petToysSchema);
module.exports = petToysModal;