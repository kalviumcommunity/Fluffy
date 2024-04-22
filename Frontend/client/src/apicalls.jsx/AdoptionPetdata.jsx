import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AdoptionPetdata() {
  const [pets, setPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:1001/main")
      .then((result) => {
        setPets(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (selectedAnimal) {
      const filtered = pets.filter((pet) => pet.animal === selectedAnimal);
      setFilteredPets(filtered);
    } else {
      setFilteredPets(pets);
    }
  }, [selectedAnimal, pets]);

  const handleAnimalChange = (animal) => {
    setSelectedAnimal(animal);
  };
  return (
    <div>
      <section style={{ padding: "50px 150px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1 style={{ color: "#6504b5" }}>Pets in Our Care</h1>
          <div>
            <button
              onClick={() => handleAnimalChange("dog")}
              style={{
                marginRight: "10px",
                padding: "10px",
                border: "none",
                borderRadius: "5px",
                background: "#6504b5",
                color: "white",
              }}
            >
              Dogs
            </button>
            <button
              onClick={() => handleAnimalChange("cat")}
              style={{
                padding: "10px",
                border: "none",
                borderRadius: "5px",
                background: "#6504b5",
                color: "white",
              }}
            >
              Cats
            </button>
          </div>
        </div>
        <hr />
        <div>
          {filteredPets.map((pet, index) => (
            <div key={index}>
              {pet.animal === "dog" && (
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
                      <span style={{ color: "#6504b5" }}>{pet.breed}</span> 🔺{" "}
                      {pet.livesin}
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
                          background: "#6504b5",
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
              )}
              {pet.animal === "cat" && (
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
                      <span style={{ color: "#6504b5" }}>{pet.breed}</span> 🔺{" "}
                      {pet.livesin}
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
                          background: "#6504b5",
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
              )}
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
        <Link to="/" style={{ textDecoration: "none", color: "#6504b5" }}>
          <p>
            <strong>&lt;&lt; Back</strong>
          </p>
        </Link>
      </section>
    </div>
  );
}

export default AdoptionPetdata;
