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
        // position: "fixed",
        top: 0,
        padding: "5px",
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        alignContent: "center",
        background: "white", 
        zIndex: 2,
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
              color: "black",
            }}
          >
            Fluffy
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            alignContent: "center",
            alignItems:"center",
            justifyContent: "space-evenly",
            width: "10vw",
          }}
        >
          <img onClick={toggleSideDiv} src="https://cdn-icons-png.flaticon.com/128/6015/6015685.png" alt="" style={{height:"3.3vh",cursor:"pointer"}} />
          <Link
            to="/your-cart"
            style={{
              color: "black",
              textDecoration: "none",
            }}
          >
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/128/3002/3002254.png"
                alt=""
                style={{ height: "3.5vh",}}
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
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
                alt=""
                style={{ height: "3vh"}}
              />
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
          style={{ cursor: "pointer", }}
        >
          &times; Close sidebar
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
