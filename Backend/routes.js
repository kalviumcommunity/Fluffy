const express = require("express");
const mongoose = require("mongoose");
const {petSchema} = require("./models/petdata")
const PetModal = require("./models/petdata")


mongoose.connect("mongodb+srv://Snegan29:snegan2914@cluster0.nvjojc5.mongodb.net/Fluffy?retryWrites=true&w=majority&appName=Cluster0")

const app = express();
app.use(express.json());

app.get("/main",(req, res)=>{
    PetModal.find()
    .then(pets => res.json(pets))
    .catch(err => res.status(500).json({error:err.message}))
}) 

app.post("/main/postdata",(req, res)=>{
    const data = req.body
    PetModal.create(data)
    .then(pets => res.json(pets))
    .catch(err => res.status(500).json({error: err.message}))
})


app.listen(1001,()=>{
    console.log("Server is running at http://localhost:1001")
})