import React, { useState, useEffect } from "react";
import Navbar from "../HomeComponents/Navbar";
import axios from "axios";
import main from "../images/dog.webp";
import { Link } from "react-router-dom";
import Reportform from "../Forms/Report";
import Lostandfoundpetdata from "../apicalls.jsx/Lostandfoundpetdata";

function Lostandfound() {
  return (
    <div>
      <Navbar />
      <div>
        <section
          style={{
            display: "flex",
            padding: "10px",
            position: "relative",
            lineHeight: "1.6",
          }}
        >
          <img
            src={main}
            alt="Adopt"
            style={{
              borderRadius: "25px 0 0 25px",
              height: "60vh",
              flex: 1,
              objectFit: "cover",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              background: "lightpink",
              height: "60vh",
              padding: "70px",
              borderRadius: "0px 25px 25px 0px",
              flex: "1",
            }}
          >
            <h4
              style={{
                fontSize: "2rem",
                color: "crimson",
                textAlign: "center",
              }}
            >
              Lost & Found
            </h4>
            <h2
              style={{
                fontSize: "2.5rem",
                color: "crimson",
                textAlign: "center",
              }}
            >
              Find or Report a Lost Pet
            </h2>
            <p
              style={{ fontSize: "1rem", color: "black", textAlign: "center" }}
            >
              Lost or found a pet? Report it here and help reunite them with
              their owners!
            </p>
            <div style={{ textAlign: "center" }}>
              <button
                style={{
                  width: "100px",
                  height: "100px",
                  padding: "10px",
                  fontSize: "1rem",
                  background: "crimson",
                  color: "white",
                  borderRadius: "50%",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Report
              </button>
            </div>
          </div>
        </section>

        <section style={{ padding: "50px 300px", background: "#ffe0e6",lineHeight:"1.6" }}>
          <div
            id="report"
            style={{ overflow: "auto", height: "75vh", padding: "25px" }}
          >
            <h1
              style={{
                textAlign: "center",
                paddingBottom: "50px",
                color: "crimson",
                textDecoration: "underline",
              }}
            >
              Report a Lost or Found Pet
            </h1>
            <p>
              Has your furry friend gone missing? Don't lose hope! At Fluffy ,
              we specialize in reuniting lost pets with their families. We've
              successfully facilitated the heartwarming return of over 10,000
              lost dogs and countless other pets to their overjoyed owners.
            </p>
            <p>
              If you find a lost pet, the first step is to approach them
              cautiously. A lost animal might be scared and nervous. Let them
              sniff your hand first and avoid making sudden movements. Look for
              a collar or ID tag, which might hold contact information for the
              owner. If no ID is found, take the pet to a local veterinarian or
              animal shelter. They can scan for a microchip, another way to
              identify the owner.
            </p>
            <p>
              When lost, pets often exhibit anxious behavior. They might be
              timid or hesitant around strangers and may whimper or try to bolt.
              Be patient and gentle.Here are some additional details to look out
              for:
            </p>
            <ul style={{ listStyleType: "disc", padding: 0 }}>
              <li>
                Does the pet have any distinguishing marks? Unusual fur
                patterns, scars, or missing limbs can help identify the owner.
              </li>
              <li>
                Is the pet wearing any other accessories? A leash, harness, or
                bandana might have the owner's contact information.
              </li>
              <li>
                Is the pet well-groomed? A well-kept pet likely has an owner who
                cares deeply and might be frantically searching.
              </li>
            </ul>

            <p>
              By taking these steps and visiting [Your Website Name], you can
              significantly increase the chances of a lost pet finding their way
              back home. We offer a user-friendly platform to report lost pets
              and browse found animals. Let's work together to create happy
              reunions for pets and their families!
            </p>
          </div>
        </section>
        <section>
          <Lostandfoundpetdata />
        </section>
        <section>
          <Reportform />
        </section>
        <section
          style={{
            position: "sticky",
            bottom: "0",
            borderTop: "1px solid gray",
            padding: "7px 250px",
            background: "white",
            height: "40px",
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "crimson" }}>
            <p>
              <strong>&lt;&lt; Back</strong>
            </p>
          </Link>
        </section>
      </div>
    </div>
  );
}

export default Lostandfound;
