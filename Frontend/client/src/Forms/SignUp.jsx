import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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
      
      // Set cookies with username and token
      Cookies.set("Username", name);
      Cookies.set("Token", response.data.token);
      Cookies.set("Useremail",email);
      
      navigate("/");
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
          <h2 style={{ textAlign: "center",fontSize:"2.5em" }}>Sign Up</h2>
          <hr style={{margin:"20px 0"}} />
          <div style={{ marginBottom: "10px" }}>
            <label style={{ color: "black" }}>Name :</label>
            <input
              type="text"
              placeholder="Enter your name in small"
              onChange={(e) => setName(e.target.value)}
              value={name}
              style={{
                width: "100%",
                padding: "15px",
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
                padding: "15px",
                border: "none",
                borderBottom: "1px solid gray",
                backgroundColor: "white",
                color: "black",
              }}
              required
            />
          </div>

          <div style={{ marginBottom: "10px",display:"flex",alignItems:"center" }}>
            <div>
              <label style={{ color: "black" }}>Password :</label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Use at least 7 characters"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                style={{
                  width: "100%",
                  padding: "15px ",
                  border: "none",
                  borderBottom: "1px solid gray",
                  backgroundColor: "white",
                  color: "black",
                }}
                required
              />
            </div>
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                width: "50px",
                height:"35px",
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
        
        </form>
        
        {/* Google Login Button */}
      </div>
    </div>
  );
}

export default SignUp;
