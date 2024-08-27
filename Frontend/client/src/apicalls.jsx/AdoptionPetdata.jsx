import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Adoptionpetdata() {
  const [pets, setPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);
  const [adoptedPets, setAdoptedPets] = useState([]);
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
    const filteredAdopted = pets.filter((pet) => pet.type === "adopted");
    setAdoptedPets(filteredAdopted);
  }, [pets]);

  useEffect(() => {
    if (selectedAnimal) {
      const filtered = pets.filter(
        (pet) => pet.animal === selectedAnimal && pet.type === "adopt"
      );
      setFilteredPets(filtered);
    } else {
      const filtered = pets.filter((pet) => pet.type === "adopt");
      setFilteredPets(filtered);
    }
  }, [selectedAnimal, pets]);

  const handleAnimalChange = (animal) => {
    setSelectedAnimal(animal);
  };

  const handleAdoptClick = (petId) => {
    const confirmed = window.confirm("Do you wish to adopt this pet?");
    if (confirmed) {
      axios
        .put(`http://localhost:1001/main/update/${petId}`, { type: "adopted" })
        .then((response) => {
          setPets((prevPets) =>
            prevPets.map((pet) =>
              pet._id === petId ? { ...pet, type: "adopted" } : pet
            )
          );
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <section style={{ padding: "50px 150px", backgroundColor: "#f9f9f9" }}>
        <h2 style={{ color: "#6504b5", fontSize: "1.9em", textAlign: "center" }}>
          Hall Of Adopted
        </h2>
        <hr style={{ margin: "20px 0" }} />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            justifyContent: "center",
            alignContent: "center",
            gap: "20px",
          }}
        >
          {adoptedPets.map((pet, index) => (
            <div key={index} style={{ overflow: "hidden" }}>
              <img
                src={pet.image}
                alt={pet.name}
                style={{
                  width: "100%",
                  height: "45vh",
                  objectFit: "cover",
                  borderRadius: "10px 10px 0 0",
                  border: "1px solid #6504b5",
                  marginBottom: "-5px", // Adjust this to control the gap
                }}
              />
              <div
                style={{
                  padding: "10px",
                  textAlign: "center",
                  border: "2px solid #6504b5",
                  borderRadius: "0 0 10px 10px",
                }}
              >
                <h3 style={{ fontSize: "1.2em", color: "#6504b5" }}>
                  {pet.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "50px 150px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1 style={{ color: "#6504b5", fontSize: "1.9em" }}>
            Pets in Our Care
          </h1>
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
        <hr style={{ margin: "20px 0" }} />
        <div style={{ height: "100%" }}>
          {filteredPets.map((pet, index) => (
            <div key={index} style={{ marginBottom: "20px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0px 50px",
                  height: "50vh",
                }}
              >
                <div style={{ padding: "0px 30px" }}>
                  <h1 style={{ fontSize: "1.7em" }}>{pet.name}</h1>
                  <hr style={{ margin: "15px 0" }} />
                  <p>
                    <span style={{ color: "#6504b5" }}>{pet.breed}</span> 🔺{" "}
                    {pet.livesin}
                  </p>
                  <hr style={{ margin: "15px 0" }} />
                  <p>
                    {pet.age} 🔺 {pet.gender} 🔺 {pet.size} 🔺 {pet.color}
                  </p>
                  <hr style={{ margin: "15px 0" }} />
                  <h5 style={{ fontSize: "1em" }}>Description</h5>
                  <p
                    id="adoption"
                    style={{
                      fontSize: "0.9rem",
                      paddingTop: "10px",
                      lineHeight: "1.5",
                      width: "35vw",
                      overflowY: "auto",
                      height: "10vh",
                      margin: "0",
                      wordWrap: "break-word",
                    }}
                  >
                    {pet.description}
                  </p>
                  <div style={{ marginTop: "20px" }}>
                    <button
                      onClick={() => handleAdoptClick(pet._id)}
                      style={{
                        background: "#6504b5",
                        border: "none",
                        color: "white",
                        padding: "10px 20px",
                        borderRadius: "5px",
                        cursor:"pointer"
                      }}
                    >
                      Adopt Me
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
              <hr style={{ margin: "20px 0" }} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Adoptionpetdata;
