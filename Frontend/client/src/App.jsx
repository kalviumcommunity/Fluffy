import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./HomeComponents/Home";
import Adoption from "./components/Adoption";
import Pettoys from "./components/pettoys";
import Petfoods from "./components/petfoods";
import Lostandfound from "./components/Lostandfound";
import SignIn from './Forms/SignIn';
import SignUp from "./Forms/SignUp";
import Dogfood from "./apicalls.jsx/Petfooddata.jsx/Dogfood";
import Catfood from "./apicalls.jsx/Petfooddata.jsx/Catfood";
import Cattreat from "./apicalls.jsx/Petfooddata.jsx/Cattreat";
import Dogtreat from "./apicalls.jsx/Petfooddata.jsx/Dogtreat";
import Dogtoys from "./apicalls.jsx/Pettoydata.jsx/Dogtoys";
import Cattoys from "./apicalls.jsx/Pettoydata.jsx/Cattoys";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />

        {/* ADOPT AND REPORT PAGES */}
        <Route path="/adopt-pets" element={<Adoption />} />
        <Route path="/report-pets" element={<Lostandfound />} />

        {/* PET FOOOOODS ROUTES */}
        <Route path="/pet-foods" element={<Petfoods />} />
        <Route path="/dog-food" element={<Dogfood/>} />
        <Route path="/dog-treat" element={<Dogtreat/>} />
        <Route path="/cat-food" element={<Catfood />} />
        <Route path="/cat-treat" element={<Cattreat />} />

        {/* PET TOOOOOYS ROUTES */}
        <Route path="/pet-toys" element={<Pettoys />} />
        <Route path="/dog-toy" element={<Dogtoys />} />
        <Route path="/cat-toy" element={<Cattoys />} />

        {/* YOUR CART AND EVERYTHING */}
        <Route path="/your-cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
