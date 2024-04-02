const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
    animal: String,
    name: String,
    age: String,
    size: String,
    breed: String,
    gender: String,
    color: String,
    born:String,
    image: String,
    description: String,
    lastSeen: String, 
    dateLost: String,
    from:String,
    owner:{
        name:String,
        email:String,
        phone:Number
    }
});

const PetModal = mongoose.model("petdatas", petSchema);
module.exports = PetModal;
