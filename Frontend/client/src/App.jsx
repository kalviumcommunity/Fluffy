import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./HomeComponents/Home";
import Adoption from "./components/Adoption";
import Pettoys from "./components/pettoys";
import Petfoods from "./components/petfoods";
import Lostandfound from "./components/Lostandfound";
import SignIn from './Forms/SignIn';
import SignUp from "./Forms/SignUp";
import AdoptPet from "./Forms/AdoptPet";
import DogfoodandTreats from "./apicalls.jsx/Petfooddata.jsx/Dogfood";
import CatfoodandTreats from "./apicalls.jsx/Petfooddata.jsx/Catfood";
import Dogtoys from "./apicalls.jsx/Pettoydata.jsx/Dogtoys";
import Cattoys from "./apicalls.jsx/Pettoydata.jsx/Cattoys";
import Cart from "./components/Cart";
import "./App.css"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/adoption-form" element={<AdoptPet />} />
      <Route path="/adopt-a-pet" element={<Adoption />} />
      <Route path="/pet-foods" element={<Petfoods />} />
      <Route path="/dog-foods" element={<DogfoodandTreats />} />
      <Route path="/cat-foods" element={<CatfoodandTreats />} />
      <Route path="/pet-toys" element={<Pettoys />} />
      <Route path="/dog-toys" element={<Dogtoys />} />
      <Route path="/cat-toys" element={<Cattoys />} />
      <Route path="/lost-and-found" element={<Lostandfound />} />
      <Route path="/your-cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
