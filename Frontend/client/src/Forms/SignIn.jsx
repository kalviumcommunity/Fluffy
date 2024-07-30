import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import Image from '../images/dog.webp';
// import Cookies from 'js-cookie';

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()

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
      console.log("Password:", password);
      setName("");
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
        backgroundImage: "linear-gradient(to bottom right, #D3989B, #BC1B68)",
        color: "black",
      }}
    >
      <div
        style={{
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          height:"550px",
          width: "550px",
          backgroundColor: "white",
          borderRadius: "50% ",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 1)",
        }}
      >
        <form onSubmit={handleSubmit}>
          <h2 style={{ textAlign: "center" }}>Sign In</h2>
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
                borderBottom:"1px solid gray",
                backgroundColor: "white",
                color: "black",
              }}
              required
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
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
                borderBottom:"1px solid gray",
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

          {/* Google Login Button */}
        <div onClick={handleGoogle} style={{ marginTop: "20px", textAlign: "center" }}>
            Sign-up with google
        </div>
          <p style={{ paddingTop: "10px", textAlign:"center" }}>
            New User? <Link to="/signup">SignUp</Link> here.
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
