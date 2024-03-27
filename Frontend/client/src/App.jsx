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
import SignIn from './Pages/SignIn';
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/apopt-a-pet" element={<Adoption/>}/>
        <Route path="/pet-foods" element={<Petfoods/>}/>
        <Route path="/pet-toys" element={<Pettoys/>}/>
        <Route path="/lost-and-found" element={<Lostandfound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
