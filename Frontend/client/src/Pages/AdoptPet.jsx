import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Image from "../images/dog.webp";
// import Cookies from 'js-cookie';

function AdoptPet() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:1001/users", {
        name: name,
        email: email,
        phone: phone,
        address: address,
      });
      console.log("Posted Successfully", response);
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Phone:", phone);
      console.log("Address:", address)
      setName("");
      setEmail("");
      setPhone("");
      setAddress("");
      navigate("/adopt-a-pet");
    } catch (err) {
      console.error("Error signing up:", err);
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "linear-gradient(to bottom right,#A106F4, #E707FA)",
        color: "black",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "650px",
          width: "650px",
          backgroundColor: "white",
          borderRadius: "50% ",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
        }}
      >
        <form onSubmit={handleSubmit} style={{width:"22vw"}}>
          <h2 style={{ textAlign: "center" }}>Adoption Form</h2>
          <hr />
          <div style={{ marginBottom: "20px" }}>
            <label style={{ color: "black" }}>Name :</label>
            <input
              type="text"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              style={{
                width: "100%",
                padding: "10px",
                border: "none",
                borderBottom: "1px solid gray",
                backgroundColor: "white",
                color: "black",
              }}
              required
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ color: "black" }}>Email :</label>
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              style={{
                width: "100%",
                padding: "10px",
                border: "none",
                borderBottom:"1px solid gray",
                backgroundColor: "white",
                color: "black",
              }}
              required
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ color: "black" }}>Phone :</label>
            <input
              type="number"
              placeholder="Enter your phone number"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              style={{
                width: "100%",
                padding: "10px",
                border: "none",
                borderBottom:"1px solid gray",
                backgroundColor: "white",
                color: "black",
              }}
              required
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ color: "black" }}>Address :</label>
            <input
              type="text"
              placeholder="Enter your address"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              style={{
                width: "100%",
                padding: "10px",
                border: "none",
                borderBottom:"1px solid gray",
                backgroundColor: "white",
                color: "black",
              }}
              required
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "black",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Submit
          </button>

        </form>
      </div>
    </div>
  );
}

export default AdoptPet;
