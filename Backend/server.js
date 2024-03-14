const express = require("express");

const app = express();
app.use(express.json());

app.get("/",(req, res)=>{
    res.json({message:"Hi i am snegan"})
}) 


app.listen(1001,()=>{
    console.log("Server is running at http://localhost:1001")
})