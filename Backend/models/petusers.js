const mongoose = require("mongoose");

const petUsersSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    address:String,
    phone:Number
})

const petUsersModal = mongoose.model("petusers",petUsersSchema);
module.exports = petUsersModal;