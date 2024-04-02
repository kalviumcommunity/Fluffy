import React, { useState, useEffect } from "react";
import Navbar from "../HomeComponents/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

import main from "../images/dog.webp";

function Lostandfound() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1001/main")
      .then((result) => {
        setPets(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

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
              background: "#FFCCCC",
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

        <section style={{ padding: "50px 360px", background: "#FFECEC" }}>
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
          <div>
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

        <section style={{ padding: "50px 200px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                color: "crimson",
              }}
            >
              Dogs in Our Care
            </h1>
            <Link to="/report-pet">
              <button
                style={{
                  padding: "10px",
                  border: "none",
                  borderRadius: "5px",
                  background: "crimson",
                  color: "white",
                }}
              >
                Add your lost pet
              </button>
            </Link>
          </div>
          <hr />
          <div>
            {pets.map((pet, index) => (
              <div key={index}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0px 30px",
                  }}
                >
                  <div style={{ padding: "15px" }}>
                    <h2>{pet.name}</h2>
                    <p>
                      <span style={{ color: "crimson" }}>{pet.breed}</span> 🔺{" "}
                      {pet.born}
                    </p>
                    <hr />
                    <p>
                      {pet.age} 🔺 {pet.gender} 🔺 {pet.size} 🔺 {pet.color}
                    </p>
                    <hr />
                    <h5>Description</h5>
                    <p style={{ fontSize: "0.9rem" }}>{pet.description}</p>
                    <div>
                      <button
                        style={{
                          background: "crimson",
                          border: "none",
                          color: "white",
                          padding: "5px 15px",
                          borderRadius: "5px",
                        }}
                      >
                        Call us
                      </button>
                    </div>
                  </div>
                  <img
                    src={pet.image}
                    alt=""
                    style={{
                      borderRadius: "10px",
                      height: "350px",
                      width: "470px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <hr />
              </div>
            ))}
          </div>
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
