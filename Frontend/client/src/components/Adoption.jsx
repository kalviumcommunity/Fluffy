// Adoption.jsx
import React, { useEffect, useState } from "react";
import Navbar from "../HomeComponents/Navbar.jsx";
import main from "../images/adopt2.webp";
import axios from "axios";
import { Link } from "react-router-dom";

function Adoption() {
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
      <Navbar />
      <div>
        <section
          style={{
            display: "flex",
            position: "relative",
            padding: "10px",
            lineHeight: "1.6",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center", // Center the content vertically
              background: "#E6E6FA",
              height: "60vh",
              padding: "70px",
              borderRadius: "25px 0px 0px 25px",
              flex: "1",
            }}
          >
            <h2
              style={{
                fontSize: "3rem",
                color: "#6504b5",
                textAlign: "center",
              }}
            >
              Spoil Your Furry Friend: Top-Rated Pet Food
            </h2>
            <p
              style={{ fontSize: "1rem", color: "black", textAlign: "center" }}
            >
              Our high-quality pet food is packed with essential vitamins and
              minerals to keep your pet happy and healthy inside and out.
            </p>
            <div style={{ textAlign: "center" }}>
              <button
                style={{
                  width: "100px",
                  height: "100px",
                  padding: "10px",
                  fontSize: "1rem",
                  background: "#6504b5",
                  color: "white",
                  borderRadius: "100%",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Explore
              </button>
            </div>
          </div>
          <img
            src={main}
            alt="Adopt"
            style={{
              borderRadius: "0px 25px 25px 0px",
              height: "60vh",
              flex: "1",
              objectFit: "cover",
            }}
          />
        </section>

        <section style={{ padding: "50px 360px", background: "#F5F0FF" }}>
          <div>
            <h1
              style={{
                color: "#6504b5",
                textAlign: "center",
                textDecoration: "underline",
                paddingBottom: "30px",
              }}
            >
              Welcome to Fluffy: Where Every Adoption Tells a Story
            </h1>
            <p>
              At Fluffy, we believe in the transformative power of pet adoption.
              Every year, millions of pets end up in shelters, waiting for their
              forever homes. By adopting a pet from Fluffy, not only are you
              giving an animal a second chance at life, but you're also gaining
              a loyal companion who will bring joy and love into your home.
            </p>
            <p>
              Did you know that adopting a pet can improve your mental and
              physical health? Studies have shown that having a pet can reduce
              stress, lower blood pressure, and even decrease the risk of heart
              disease. Plus, adopting from shelters helps reduce pet
              overpopulation and supports responsible pet ownership. When you
              choose to adopt from Fluffy, you're not just getting a pet –
              you're making a difference in the lives of animals in need.
            </p>
            <hr />
            <div>
              <h3
                style={{
                  color: "#6504b5",
                  textAlign: "center",
                  textDecoration: "underline",
                  paddingBottom: "30px",
                }}
              >
                Paws and You: Things to Consider Before Adopting a Dog
              </h3>
              <p>
                Bringing a furry friend into your life can be an enriching
                experience but it also comes with its fair share of
                responsibilities. Before you decide to adopt a dog, it’s
                essential to consider various factors to ensure a happy and
                healthy relationship between you and your future four-legged
                companion. Here are some things to keep in mind before you take
                the plunge into pet parenthood.
              </p>

              <div>
                <h5 style={{ color: "#6504b5" }}>Lifestyle assessment</h5>
                <p>
                  Start by evaluating your daily routine and lifestyle. Dogs
                  require time, attention and exercise. This can directly can
                  affect their behaviour. Consider your work schedule, social
                  commitments and hobbies. If you lead a hectic life that leaves
                  little room for a pet, it might be wise to wait until you have
                  more time to dedicate to a furry friend.
                </p>
              </div>
              <hr />
              <div>
                <h5 style={{ color: "#6504b5" }}> Space and environment</h5>
                <p>
                  Dogs, regardless of their size, need ample space to move
                  around and play. Assess your living situation, whether it’s an
                  apartment, house or a shared space. Some breeds thrive in
                  smaller spaces, while others require a yard for exercise.
                  Ensure your living situation is suitable for the specific
                  needs of the dog you’re considering.
                </p>
              </div>
              <hr />
              <div>
                <h5 style={{ color: "#6504b5" }}>
                  Allergies and health concerns
                </h5>
                <p>
                  Allergies can be a significant consideration when adopting a
                  dog. Some breeds are known to be hypoallergenic, while others
                  may trigger allergic reactions in sensitive individuals.
                  Additionally, be prepared for potential health issues and the
                  associated costs of veterinary care.
                </p>
              </div>
              <hr />
              <div>
                <h5 style={{ color: "#6504b5" }}>Breed characteristics</h5>
                <p>
                  Each dog breed has unique characteristics, including size,
                  energy levels, grooming needs and temperament. Research
                  different breeds to find one that aligns with your preferences
                  and lifestyle. Consider whether you want an active dog for
                  outdoor adventures or a more laid-back companion.
                </p>
              </div>
              <hr />
              <div>
                <h5 style={{ color: "#6504b5" }}>Financial commitment</h5>
                <p>
                  Caring for a dog comes with various costs, including food,
                  grooming, veterinary care, and supplies. Be prepared for the
                  financial responsibility that comes with pet parenthood.
                  Unexpected medical expenses can arise, so having a financial
                  safety net for your pet is crucial.
                </p>
              </div>
              <hr />
              <div>
                <h5 style={{ color: "#6504b5" }}>Time and training</h5>
                <p>
                  Dogs require time and patience for training. Puppies, in
                  particular, need consistent training to become well-behaved
                  adults. Consider whether you have the time and energy to
                  invest in training and socialising your new companion.
                </p>
              </div>
              <hr />
              <div>
                <h5 style={{ color: "#6504b5" }}>Long-term commitment</h5>
                <p>
                  Dogs have relatively long lifespans, and adopting one is a
                  commitment that lasts many years. Consider your plans, such as
                  career changes, moving, or starting a family, and how a dog
                  fits into those plans. Ensure you’re ready for the long-term
                  commitment and responsibility of pet parenthood.
                </p>
              </div>
              <hr />
              <div>
                <h5 style={{ color: "#6504b5" }}>Shelter or breeder</h5>
                <p>
                  Decide whether to adopt from a shelter or purchase from a
                  reputable breeder. Both options have pros and cons, but
                  adopting from a shelter can be a fulfilling experience as
                  you’re providing a loving home for a deserving dog.
                </p>
              </div>
              <p>
                Adopting a dog is a life-changing decision that requires careful
                consideration. By assessing your lifestyle, living situation and
                personal preferences, you can make an informed choice that leads
                to a happy and harmonious relationship with your new canine
                companion. Remember, a dog is not just a pet; they become an
                integral part of your family, bringing joy, love and loyalty
                into your life.
              </p>
            </div>
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
    </div>
  );
}

export default Adoption;
