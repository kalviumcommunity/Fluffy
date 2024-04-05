const mongoose = require("mongoose")

const petFoodSchema = new mongoose.Schema({
    brand:String,
    productName:String,
    age:String,
    price:Number,
    rating: {
        stars:Number,
        numberOfReviews:Number,
      },
    image:String,
})

const petFoodModal = mongoose.model("petfoods",petFoodSchema);
module.exports = petFoodModal;