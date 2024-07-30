import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Lostandfoundpetdata() {
  const [pets, setPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);
  const [rescuePets, setRescuePets] = useState([]);
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
    const filteredRescue = pets.filter((pet) => pet.type === "rescue");
    setRescuePets(filteredRescue);
  }, [pets]);

  useEffect(() => {
    if (selectedAnimal) {
      const filtered = pets.filter((pet) => pet.animal === selectedAnimal && pet.type === "report");
      setFilteredPets(filtered);
    } else {
      const filtered = pets.filter((pet) => pet.type === "report");
      setFilteredPets(filtered);
    }
  }, [selectedAnimal, pets]);

  const handleAnimalChange = (animal) => {
    setSelectedAnimal(animal);
  };

  return (
    <div>
     <section style={{ padding: "50px 150px", backgroundColor: "#f9f9f9" }}>
  <h2 style={{ color: "crimson", fontSize: "1.9em", textAlign: "center" }}>Hall Of Rescued</h2>
  <hr style={{ margin: "20px 0" }} />
  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)",justifyContent:"center",alignContent:"center", gap: " 30px 40px" }}>
    {rescuePets.map((pet, index) => (
      <div key={index} style={{  overflow: "hidden" }}>
        <img
          src={pet.image}
          alt={pet.name}
          style={{
            width: "100%",
            height: "45vh",
            objectFit: "cover",
            borderRadius: "10px 10px 0 0",
            border:"1px solid crimson",
            marginBottom: "-5px" // Adjust this to control the gap
          }}
        />
        <div style={{ padding: "10px", textAlign: "center", border: "2px solid crimson",borderRadius:"0 0 10px 10px" }}>
          <h3 style={{ fontSize: "1.2em",color:"crimson" }}>{pet.name}</h3>
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
          <h1 style={{ color: "crimson", fontSize: "1.9em" }}>Reported Lost Pets</h1>
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0px 50px",
                  height: "50vh"
                }}
              >
                <div style={{ padding: "0px 30px" }}>
                  <h1 style={{ fontSize: "1.7em" }}>{pet.name}</h1>
                  <hr style={{ margin: "15px 0" }} />
                  <p>
                    <span style={{ color: "crimson" }}>{pet.breed}</span> 🔺 {pet.livesin}
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
              <hr style={{ margin: "20px 0" }} />
            </div>
          ))}
        </div>
      </section>
      
      <Link to="/" style={{ textDecoration: "none" }}>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly", padding: "10px", width: "11.5vw", borderRadius: "5px", backgroundColor: "crimson" }}>
            <img src="https://cdn-icons-png.flaticon.com/128/8213/8213587.png" alt="" style={{ height: "2.2vh" }} />
            <p style={{ margin: "0", marginLeft: "5px", color: "white" }}>Back to Home</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Lostandfoundpetdata;
