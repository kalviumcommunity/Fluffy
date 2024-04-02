import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideDiv = () => {
    setIsOpen(!isOpen);
  };

  const closeSideDiv = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav
        style={{
          position: "sticky",
          top: 0,
          padding: "5px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          background: "white",
          color: "black",
          zIndex: 2,
          borderBottom: "1px solid gray",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link to="/">
            <img
              src={Logo}
              alt=""
              style={{ height: "40px", marginRight: "0px" }}
            />
          </Link>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              fontSize: "1.5rem",
              background: "linear-gradient(45deg, orange, red)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Fluffy
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "11.5vw",
          }}
        >
          <button
            onClick={toggleSideDiv}
            style={{
              border: "none",
              background: "black",
              color: "white",
              textDecoration: "none",
              cursor: "pointer",
              padding: "5px 10px",
              transition: "right 0.5s ease",
              borderRadius: "5px",
            }}
            className="navbar-button"
          >
            Navbar
          </button>
          <Link
            to="/signup"
            style={{
              color: "black",
              textDecoration: "none",
              border: "1px solid black",
              padding: "5px 10px",
              borderRadius: "5px",
            }}
          >
            Signup
          </Link>
        </div>
      </nav>
      <div
        className={`sideDiv ${isOpen ? "open" : ""}`}
        style={{
          position: "fixed",
          top: 0,
          right: isOpen ? "0" : "-60%",
          width: "30%",
          height: "100vh",
          overflow: "auto",
          backgroundColor: "#2a2d2e",
          color: "white",
          padding: "30px",
          transition: "right 0.5s ease",
          boxShadow: "0 0 10px rgba(0, 0 , 0, 0.5)",
          zIndex:3
        }}
      >
        <span
          onClick={closeSideDiv}
          className="closeButton"
          style={{ cursor: "pointer", fontSize: "2rem" }}
        >
          &times;
        </span>
        <div style={{ paddingTop: "20px" }}>
          <p>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              Home
            </Link>
          </p>
          <p>
            <Link
              to="/adopt-a-pet"
              style={{ color: "white", textDecoration: "none" }}
            >
              Adopt a pet
            </Link>
          </p>
          <p>
            <Link
              to="/pet-foods"
              style={{ color: "white", textDecoration: "none" }}
            >
              Buy petfood for your pet
            </Link>
          </p>
          <p>
            <Link
              to="/pet-toys"
              style={{ color: "white", textDecoration: "none" }}
            >
              Buy pettoy for your pet
            </Link>
          </p>
          <p>
            <Link
              to="/lost-and-found"
              style={{ color: "white", textDecoration: "none" }}
            >
              Report your lost pet
            </Link>
          </p>
          <p style={{ border: "2px solid white" }}></p>
        </div>
      </div>
    </>
  );
}

export default Navbar;
