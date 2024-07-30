import React, { useState } from "react";
import { Link } from "react-router-dom";

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
          padding: "10px",
          display: "flex",
          justifyContent: "space-around",
          alignContent: "center",
          backdropFilter: "blur(20px)",
          zIndex: 2,
          backgroundColor: "rgba(0,0,0,0.3)",
          
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link to="/">
            <img
              src="https://cdn-icons-png.flaticon.com/128/2809/2809922.png"
              alt=""
              style={{ height: "5vh", marginRight: "0px" }}
            />
          </Link>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              fontSize: "1.5rem",
              color: "white",
            }}
          >
            Fluffy
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "space-between",
            width: "13vw",
          }}
        >
          <img
            onClick={toggleSideDiv}
            src="https://img.icons8.com/?size=100&id=8113&format=png&color=FFFFFF"
            alt=""
            style={{ height: "3.5vh", cursor: "pointer" }}
          />
          <Link
            to="/your-cart"
            style={{
              color: "black",
              textDecoration: "none",
            }}
          >
            <div>
              <img
                src="https://img.icons8.com/?size=100&id=ii6Lr4KivOiE&format=png&color=FFFFFF"
                alt=""
                style={{ height: "3.5vh" }}
              />
            </div>
          </Link>
          <Link
            to="/signup"
            style={{
              color: "black",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                color: "white",
                border: "1px solid white",
                padding: "5px 10px",
                borderRadius: "5px",
              }}
            >
              <p>Signup</p>
            </div>
          </Link>
        </div>
      </nav>
      <div
        className={`sideDiv ${isOpen ? "open" : ""}`}
        style={{
          position: "fixed",
          top: 0,
          right: isOpen ? "0" : "-50%",
          width: "21%",
          maxWidth: "400px", // Limiting sidebar width
          height: "100vh",
          overflow: "auto",
          backgroundColor: "gray",
          color: "white",
          padding: "30px",
          transition: "right 0.5s ease",
          boxShadow: "0 0 10px rgba(0, 0 , 0, 0.5)",
          zIndex: 3,
        }}
      >
        <span
          onClick={closeSideDiv}
          className="closeButton"
          style={{ cursor: "pointer" }}
        >
          &times; Close sidebar
        </span>
        <div style={{ paddingTop: "20px" }}>
          <p>
            <Link
              to="/"
              style={{ color: "white", textDecoration: "none" }}
              onClick={closeSideDiv}
            >
              Home
            </Link>
          </p>
          <p>
            <Link
              to="/adopt-pets"
              style={{ color: "white", textDecoration: "none" }}
              onClick={closeSideDiv}
            >
              Adopt a pet
            </Link>
          </p>
          <p>
            <Link
              to="/pet-foods"
              style={{ color: "white", textDecoration: "none" }}
              onClick={closeSideDiv}
            >
              Buy petfood for your pet
            </Link>
          </p>
          <p>
            <Link
              to="/pet-toys"
              style={{ color: "white", textDecoration: "none" }}
              onClick={closeSideDiv}
            >
              Buy pettoy for your pet
            </Link>
          </p>
          <p>
            <Link
              to="/report-pets"
              style={{ color: "white", textDecoration: "none" }}
              onClick={closeSideDiv}
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
