import React, { useState } from "react";
import Navbar from "../HomeComponents/Navbar";
import axios from "axios";
import main from "../images/report.jpg";
import { Link } from "react-router-dom";
import Reportform from "../Forms/Report";
import Lostandfoundpetdata from "../apicalls.jsx/Lostandfoundpetdata";
import Footer from "../HomeComponents/Footer";
import { Parallax } from "react-parallax";

function Lostandfound() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <Parallax id="image" bgImage={main} strength={200}>
        <div style={{ height: "100vh", display: "flex", flexDirection: "column", paddingBottom: "150px", background: "rgba(0,0,0,0.5)" }}>
          <Navbar />
          <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
            <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", width: "100vw", alignItems: "center", color: "white" }}>
              <p style={{ transform: "rotate(90deg)", textAlign: "right", whiteSpace: "nowrap", fontSize: "0.7em" }}>SCROLL DOWN</p>
              <div>
                <p style={{ fontSize: "8em", textAlign: "center", fontWeight: "500" }}>Reported Lost<br /> & Rescued Pets</p>
              </div>
              <p style={{ transform: "rotate(90deg)", textAlign: "right", whiteSpace: "nowrap", fontSize: "0.7em" }}> SCROLL DOWN </p>
            </div>
          </div>
        </div>
      </Parallax>

      <section style={{ padding: "50px 300px", background: "#FFEDDE", lineHeight: "1.6" }}>
        <div id="report" style={{ overflow: "auto", height: "75vh", padding: "25px" }}>
          <h1 style={{ textAlign: "center", paddingBottom: "50px", color: "crimson", textDecoration: "underline", fontSize: "2em" }}>
            Report a Lost or Found Pet
          </h1>
          <p>
            Has your furry friend gone missing? Don't lose hope! At Fluffy , we specialize in reuniting lost pets with their families. We've successfully facilitated the heartwarming return of over 10,000 lost dogs and countless other pets to their overjoyed owners.
          </p>
          <p>
            If you find a lost pet, the first step is to approach them cautiously. A lost animal might be scared and nervous. Let them sniff your hand first and avoid making sudden movements. Look for a collar or ID tag, which might hold contact information for the owner. If no ID is found, take the pet to a local veterinarian or animal shelter. They can scan for a microchip, another way to identify the owner.
          </p>
          <p>
            When lost, pets often exhibit anxious behavior. They might be timid or hesitant around strangers and may whimper or try to bolt. Be patient and gentle.Here are some additional details to look out for:
          </p>
          <ul>
            <li>Does the pet have any distinguishing marks? Unusual fur patterns, scars, or missing limbs can help identify the owner.</li>
            <li>Is the pet wearing any other accessories? A leash, harness, or bandana might have the owner's contact information.</li>
            <li>Is the pet well-groomed? A well-kept pet likely has an owner who cares deeply and might be frantically searching.</li>
          </ul>
          <p>
            By taking these steps and visiting [Fluffy], you can significantly increase the chances of a lost pet finding their way back home. We offer a user-friendly platform to report lost pets and browse found animals. Let's work together to create happy reunions for pets and their families!
          </p>
        </div>
      </section>
      <section>
        <Lostandfoundpetdata />
      </section>
      <section
        onClick={togglePopup}
        style={{
          position: "fixed",
          top: "85%",
          right: "0%",
          cursor: "pointer",
          display: "flex",
          background: "crimson",
          color: "white",
          padding: "10px",
          borderRadius:"25px 0px 0 25px"
        }}
      >
        <img src="https://cdn-icons-png.flaticon.com/128/2353/2353855.png" alt="" style={{ height: "30px" }} />
        <button
          style={{
            background: "crimson",
            color: "white",
            border: "none",
            padding: "5px",
          }}
        >
          Report Form
        </button>
      </section>

      {isPopupOpen && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // paddingTop:"50px"
          }}
        >
          <div
            style={{
              // padding: "20px",
              borderRadius: "10px",
              position: "relative",
              height: "auto",
            }}
          >
            <button
              onClick={togglePopup}
              style={{
                position: "absolute",
                top: "40px",
                right: "40px",
                background: "crimson",
                color: "white",
                border: "none",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                cursor: "pointer",
              }}
            >
              X
            </button>
            <Reportform />
          </div>
        </div>
      )}
    </>
  );
}

export default Lostandfound;
