const mongoose = require("mongoose");

const petUsersSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
})

const petUsersModal = mongoose.model("petusers",petUsersSchema);
module.exports = petUsersModal;