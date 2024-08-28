const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const PetModal = require("./models/petdata");
const PetUsersModal = require("./models/petusers");
const PetFoodModal = require("./models/petfood");
const petToysModal = require("./models/pettoys");
const CartModal = require("./models/cart");
const punycode = require('punycode');


mongoose.connect("mongodb+srv://Snegan29:snegan2914@cluster0.nvjojc5.mongodb.net/Fluffy?retryWrites=true&w=majority&appName=Cluster0");

const app = express();
app.use(cors());
app.use(express.json());

                                
// SignUp route request-response
app.get('/logins', (req, res) => {
    PetUsersModal.find()
        .then(users => res.json(users))
        .catch(err => res.status(500).json({ error: err.message }));
});

app.post("/users", (req, res) => {
    const data = req.body;
    PetUsersModal.create(data)
    .then(pets => {
        const token = generateToken({ id: pets._id, email: pets.email });
        res.json({ pets, token });
    })
    .catch(err => res.status(500).json({ error: err.message }));
});


// 4 API requests

// for pets data
app.get("/main",  (req, res) => {
    PetModal.find()
    .then(pets => res.json(pets))
    .catch(err => res.status(500).json({ error: err.message }));
});

// for pet foods
app.get("/main/petfoods", (req, res) => {
    PetFoodModal.find()
    .then(petfood => res.json(petfood))
    .catch(err => res.status(500).json({ error: err.message }));
});

// for pet toys
app.get("/main/pettoys", (req, res) => {
    petToysModal.find()
    .then(pettoys => res.json(pettoys))
    .catch(err => res.status(500).json({ error: err.message }));
});

// get cart
app.get("/main/yourcart", (req, res) => {
    CartModal.find()
    .then(products => res.json(products))
    .catch(err => res.status(500).json({ error: err.message }));
});

// post cart
app.post("/main/addtocart", (req, res) => {
    const data = req.body;
    CartModal.create(data)
    .then(products => res.json(products))
    .catch(err => res.status(500).json({ error: err.message }));
});

// Delete cart
app.delete('/main/addtocart/:id', (req, res) => {
    const id = req.params.id;
    CartModal.findByIdAndDelete(id)
    .then(product => res.json(product))
    .catch(err => res.status(500).json({ error: err.message }));
});

// Pet data
app.post("/main/postdata", async (req, res) => {
    try {
        console.log("Received data:", req.body); // Log received data
        const data = req.body;
        const newPet = await PetModal.create(data);
        console.log("Data saved:", newPet); // Log saved data
        res.json(newPet);
    } catch (err) {
        console.error("Error posting data:", err); // Log the error
        res.status(500).json({ error: err.message });
    }
});

app.put("/main/editdata/:id", (req, res) => {
    const id = req.params.id;
    const update = req.body;
    PetModal.findByIdAndUpdate(id, update, { new: true })
    .then(updatedPet => {
        if (!updatedPet) {
            return res.status(404).json({ error: "Pet not found" });
        }
        res.json(updatedPet);
    })
    .catch(err => res.status(500).json({ error: "Failed to update pet" }));
});

app.listen(1001, () => {
    console.log("Server is running at http://localhost:1001");
});
