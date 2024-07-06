import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


function Lostandfoundpetdata() {
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
          <h1 style={{ color: "crimson", fontSize: "1.9em" }}>Pets in Our Care</h1>
          <div>
            <button
              onClick={() => handleAnimalChange("dog")}
              style={{
                marginRight: "10px",
                padding: "10px",
                border: "none",
                borderRadius: "5px",
                background: "crimson",
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
                background: "crimson",
                color: "white",
              }}
            >
              Cats
            </button>
          </div>
        </div>
        <hr style={{ margin: "20px 0" }} />
        <div style={{ height: "100%" }}>
          {filteredPets.map((pet, index) => (
            <div key={index} style={{ marginBottom: "20px" }}>
              {pet.animal === "dog" && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0px 50px",
                    height: "50vh"
                  }}
                >
                  <div style={{ padding: "0px 20px"}}>
                    <h1 style={{ fontSize: "1.7em" }}>{pet.name}</h1>
                    <hr style={{ margin: "15px 0" }} />
                    <p>
                      <span style={{ color: "crimson" }}>{pet.breed}</span> 🔺{" "}
                      {pet.livesin}
                    </p>
                    <hr style={{ margin: "15px 0" }} />
                    <p>
                      {pet.age} 🔺 {pet.gender} 🔺 {pet.size} 🔺 {pet.color}
                    </p>
                    <hr style={{ margin: "15px 0" }} />
                    <h5 style={{ fontSize: '1em' }}>Description</h5>
                    <p id="adoption" style={{ fontSize: "0.9rem", paddingTop: "10px", lineHeight: "1.5", width: "35vw", overflowY: "auto", height: "10vh", margin: "0", wordWrap: "break-word" }}>{pet.description}</p>
                    <div style={{ marginTop: "20px" }}>
                      <button
                        style={{
                          background: "crimson",
                          border: "none",
                          color: "white",
                          padding: "10px 20px",
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
                      width: "500px",
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
                    justifyContent: "space-between  ",
                    padding: "0px 50px",
                    height: "50vh"
                  }}
                >
                  <div style={{ padding: "0px 20px"}}>
                    <h1 style={{ fontSize: "1.7em" }}>{pet.name}</h1>
                    <hr style={{ margin: "15px 0" }} />
                    <p>
                      <span style={{ color: "crimson" }}>{pet.breed}</span> 🔺{" "}
                      {pet.livesin}
                    </p>
                    <hr style={{ margin: "15px 0" }} />
                    <p>
                      {pet.age} 🔺 {pet.gender} 🔺 {pet.size} 🔺 {pet.color}
                    </p>
                    <hr style={{ margin: "15px 0" }} />
                    <h5 style={{ fontSize: '1em' }}>Description</h5>
                    <p id="adoption" style={{ fontSize: "0.9rem", paddingTop: "10px", lineHeight: "1.5", width: "35vw", overflowY: "auto", height: "10vh", margin: "0", wordWrap: "break-word" }}>{pet.description}</p>
                    <div style={{ marginTop: "20px" }}>
                      <button
                        style={{
                          background: "crimson",
                          border: "none",
                          color: "white",
                          padding: "10px 20px",
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
                      width: "500px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              )}
              <hr style={{ margin: "20px 0" }} />
            </div>
          ))}
        </div>
        
      </section>
    </div>
  );
}

export default Lostandfoundpetdata;
