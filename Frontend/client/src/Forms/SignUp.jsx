import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import Image from "../images/dog.webp";
import { GoogleLogin } from "@react-oauth/google";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:1001/users", {
        name: name,
        email: email,
        password: password,
      });
      console.log("Posted Successfully", response);
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Password:", password);
      setName("");
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (err) {
      console.error("Error signing up:", err);
    }
  };

  const handleGoogle = () => {
    console.log("clicked")
    axios.post("http://localhost:1001/api/google/")
    .then((data) => {
      console.log(data.data.redirectURI)
      window.location.href = data.data.redirectURI
    })
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "linear-gradient(to bottom right, #0061FF, #60EFFF)",
        color: "black",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "550px",
          height: "550px",
          padding: "30px",
          backgroundColor: "white",
          borderRadius: "50%",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 1)",
        }}
      >
        <form onSubmit={handleSubmit}>
          <h2 style={{ textAlign: "center" }}>Sign Up</h2>
          <hr />
          <div style={{ marginBottom: "10px" }}>
            <label style={{ color: "black" }}>Name :</label>
            <input
              type="text"
              placeholder="Enter your name in small"
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

          <div style={{ marginBottom: "10px" }}>
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
                borderBottom: "1px solid gray",
                backgroundColor: "white",
                color: "black",
              }}
              required
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label style={{ color: "black" }}>Password :</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="use atleast 7 characters"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              style={{
                width: "80%",
                padding: "10px",
                border: "none",
                borderBottom: "1px solid gray",
                backgroundColor: "white",
                color: "black",
              }}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                marginLeft: "7px",
                padding: "10px 5px",
                width: "60px",
                backgroundColor: "white",
                border: "1px solid black",
                color: "black",
                borderRadius: "5px",
                cursor: "pointer",
                textAlign: "center",
              }}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
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
          <p style={{ paddingTop: "10px", textAlign: "center" }}>
            Already an User? <Link to="/signin">SignIn</Link> here.
          </p>
        </form>
        
        {/* Google Login Button */}
        <div onClick={handleGoogle} style={{ marginTop: "20px", textAlign: "center" }}>
            Sign-up with google
        </div>
      </div>
    </div>
  );
}

export default SignUp;
