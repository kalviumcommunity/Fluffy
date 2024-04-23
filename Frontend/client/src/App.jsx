// App.js
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./HomeComponents/Home";
import Adoption from "./components/Adoption";
import Pettoys from "./components/Pettoys";
import Petfoods from "./components/Petfoods";
import Lostandfound from "./components/Lostandfound";
import SignIn from './Forms/SignIn';
import SignUp from "./Forms/SignUp";
import AdoptPet from "./Forms/AdoptPet";
import DogfoodandTreats from "./apicalls.jsx/Petfooddata.jsx/Dogfood"
import CatfoodandTreats from "./apicalls.jsx/Petfooddata.jsx/Catfood";
import Dogtoys from "./apicalls.jsx/Pettoydata.jsx/Dogtoys"
import Cattoys from "./apicalls.jsx/Pettoydata.jsx/Cattoys";

function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Home/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />

        <Route path="/adoption-form" element={<AdoptPet/>} />
        <Route path="/adopt-a-pet" element={<Adoption/>}/>

        <Route path="/pet-foods" element={<Petfoods/>}/>
        <Route path="/dog-foods" element={<DogfoodandTreats/>}/>
        <Route path="/cat-foods" element={<CatfoodandTreats/>}/>

        <Route path="/pet-toys" element={<Pettoys/>}/>
        <Route path="/dog-toys" element={<Dogtoys/>} />
        <Route path="/cat-toys" element={<Cattoys/>} />

        <Route path="/lost-and-found" element={<Lostandfound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
