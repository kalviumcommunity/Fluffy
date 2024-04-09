import React from "react";
import Navbar from "../HomeComponents/Navbar";
import { Link } from "react-router-dom";
import Black from "../images/adopt1.webp";
import Black2 from "../images/adopt2.webp";
import main from "../images/food.png";

function Petfoods() {
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
              justifyContent: "center",
              background: "#F0FFDE",
              height: "60vh",
              padding: "70px",
              borderRadius: "25px 0px 0px 25px",
              flex: "1",
            }}
          >
            <h2
              style={{
                fontSize: "3rem",
                color: "#388E3C",
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
                  fontSize: "1.1rem",
                  background: "#388E3C",
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
              width: "50vw",
              flex: "1",
              objectFit: "cover",
            }}
          />
        </section>

        <section style={{ padding: "50px 360px", background: "#F9FFF3" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              padding: "20px",
              textAlign: "center",
              color: "#388E3C",
              textDecoration: "underline",
            }}
          >
            Tailored Meals: Why Your Pet Needs Specific Food
          </h2>
          <div>
            <p>
              Just like you wouldn't eat the same thing every day, your furry
              friend shouldn't either! Pets have unique dietary needs that vary
              depending on several factors. Here's a quick dive into why
              "one-size-fits-all" pet food isn't ideal:
            </p>
          </div>
          <div>
            <h5 style={{ color: "#388E3C" }}>Species Matters</h5>
            <p>
              Cats and dogs, our most common companions, have vastly different
              dietary requirements. Cats are obligate carnivores, needing animal
              protein for survival. Dog's, on the other hand, are omnivores and
              can thrive on a mix of protein, vegetables, and grains. Their food
              reflects this difference, with cat food being higher in animal
              protein and dog food offering a more balanced mix.
            </p>
          </div>
          <hr style={{ borderTop: "3px solid darkgreen" }} />
          <div>
            <h5 style={{ color: "#388E3C" }}>Life Stages</h5>
            <p>
              A spunky puppy needs more protein and calories for growth than a
              senior dog looking to maintain a healthy weight. Similarly,
              pregnant or nursing pets have different needs than their inactive
              counterparts. Pet food comes in categories like "puppy," "adult,"
              and "senior" to address these varying requirements at each life
              stage.
            </p>
          </div>
          <hr style={{ borderTop: "3px solid darkgreen" }} />
          <div>
            <h5 style={{ color: "#388E3C" }}>Activity Level</h5>
            <p>
              Think of your pet as a furry athlete! A high-energy Border Collie
              will burn calories much faster than a lounging pug. Active pets
              need food with more calories and nutrients to fuel their busy
              bodies, while less active pets need food formulated for weight
              management.
            </p>
          </div>
          <hr style={{ borderTop: "3px solid darkgreen" }} />
          <div>
            <h5 style={{ color: "#388E3C" }}>Breed Matters</h5>
            <p>
              A Great Dane has different nutritional needs than a Chihuahua.
              Large-breed puppies especially need food designed for healthy bone
              growth, while smaller breeds might benefit from smaller kibble
              sizes for easier chewing and digestion.
            </p>
          </div>
          <hr style={{ borderTop: "3px solid darkgreen" }} />
          <div>
            <h5 style={{ color: "#388E3C" }}>Health Concerns</h5>
            <p>
              Just like us, pets can have allergies, digestive issues, or other
              health problems. Special diets with limited ingredients,
              probiotics, or other modifications may be necessary to address
              these specific needs.
            </p>
          </div>
          <div>
            <p>
              By understanding your pet's unique needs : species, age, activity
              level, breed, and any health concerns, you can choose a food that
              provides the optimal nutrition for a long and healthy life. When
              in doubt, consult your veterinarian for personalized guidance on
              your pet's dietary journey!
            </p>
          </div>
        </section>

        <hr style={{ borderTop: "3px solid darkgreen" }} />
        <section style={{ padding: "50px 250px" }}>
          <h2
            style={{
              color: "#388E3C",
              textDecoration: "underline",
              textAlign: "center",
              paddingBottom: "50px",
            }}
          >
            Explore Our Pet's Foods
          </h2>
          <div style={{ padding: "20px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={Black2}
                alt=""
                style={{
                  height: "40vh",
                  width: "20vw",
                  objectFit: "cover",
                  borderRadius: "15px",
                }}
              />
              <div style={{ padding: "20px" }}>
                <h4>From Tiny Tails to Big Barks: Doggie Delights</h4>
                <p style={{ fontSize: "0.9rem" }}>
                  Keep tails wagging and woofs booming with our delightful dog
                  treats! A recipe for boundless energy and mischievous fun. Get
                  ready for tail-wagging adventures and paw-some memories!..
                </p>
                <blockquote
                  style={{
                    color: "#007bff",
                    fontFamily:
                      "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                  }}
                >
                  #HappyTails #FuelTheFun #PawsomeEats #HealthyHounds
                </blockquote>
                <Link to="/dog-foods">
                  <button
                    style={{
                      background: "#388E3C",
                      border: "none",
                      color: "white",
                      marginTop: "40px",
                      padding: "5px 15px",
                      borderRadius: "5px",
                    }}
                  >
                    Explore
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <hr style={{ borderTop: "3px solid darkgreen" }} />
          <div>
            <div
              style={{ display: "flex", alignItems: "center", padding: "20px" }}
            >
              <img
                src={Black2}
                alt=""
                style={{
                  height: "40vh",
                  width: "20vw",
                  objectFit: "cover",
                  borderRadius: "15px",
                }}
              />
              <div style={{ padding: "20px" }}>
                <h4>Doggie Delights: Treats that Wag!</h4>
                <p style={{ fontSize: "0.9rem" }}>
                  From curious pups to treat-loving superstars, our delicious
                  dog treats guarantee wagging tails with every bite. Treat time
                  is fun time!..
                </p>
                <blockquote
                  style={{
                    color: "#007bff",
                    fontFamily:
                      "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                  }}
                >
                  #WagAndTreat #TreatTime #Procrastinate
                </blockquote>
                <Link to="/dog-treats">
                  <button
                    style={{
                      background: "#388E3C",
                      border: "none",
                      color: "white",
                      marginTop: "40px",
                      padding: "5px 15px",
                      borderRadius: "5px",
                    }}
                  >
                    Explore
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <hr style={{ borderTop: "3px solid darkgreen" }} />
        </section>
        <section style={{ padding: "50px 300px" }}>
          <h2
            style={{
              paddingBottom: "50px",
              color: "#4CAF50",
              textDecoration: "underline",
              textAlign: "center",
            }}
          >
            Explore Our Cat's Food
          </h2>
          <div>
            <div
              style={{ display: "flex", alignItems: "center", padding: "20px" }}
            >
              <div style={{ padding: "20px" }}>
                <h3>
                  From Curious Kittens to Agile Hunters: Cat-tastic Cuisine
                </h3>
                <p style={{ fontSize: "0.9rem" }}>
                  Fuel their playful curiosity and support healthy development
                  for a lifetime of purrs! Our cat food provides the purr-fect
                  foundation for strong bodies and sharp minds. Let the whisker
                  adventures begin!..
                </p>
                <blockquote
                  style={{
                    color: "#007bff",
                    fontFamily:"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                  }}
                >
                  {" "}
                  #Purrfection #WhiskerWonder #CatCuisine #MeowMagic
                </blockquote>
                <button
                  style={{
                    background: "#388E3C",
                    border: "none",
                    color: "white",
                    marginTop: "40px",
                    padding: "5px 15px",
                    borderRadius: "5px",
                  }}
                >
                  Explore
                </button>
              </div>
              <img
                src={Black}
                alt=""
                style={{
                  height: "40vh",
                  width: "20vw",
                  objectFit: "cover",
                  borderRadius: "15px",
                }}
              />
            </div>
          </div>
          <hr style={{ borderTop: "3px solid darkgreen" }} />
          <div>
            <div
              style={{ display: "flex", alignItems: "center", padding: "20px" }}
            >
              <div style={{ padding: "20px" }}>
                <h3>
                  Unleashing the Inner Purr: Pawsitively Purrfect Cat Treats
                </h3>
                <p style={{ fontSize: "0.9rem" }}>
                  From playful pounces to graceful leaps, our purrfect cat
                  treats offer a tantalizing mix of flavor and fun! Fuel their
                  adventures and keep those purrs coming with every tasty bite.
                  Treat time is playtime!..
                </p>
                <blockquote style={{ color: "#007bff" ,fontFamily:"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"}}>
                  #PurrfectTreats #MeowMoments #NomNomNom{" "}
                </blockquote>
                <button
                  style={{
                    background: "#388E3C",
                    border: "none",
                    color: "white",
                    marginTop: "40px",
                    padding: "5px 15px",
                    borderRadius: "5px",
                  }}
                >
                  Explore
                </button>
              </div>
              <img
                src={Black}
                alt=""
                style={{
                  height: "40vh",
                  width: "20vw",
                  objectFit: "cover",
                  borderRadius: "15px",
                }}
              />
            </div>
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
          <Link to="/" style={{ textDecoration: "none", color: "#388E3C" }}>
            <p>
              <strong>&lt;&lt; Back</strong>
            </p>
          </Link>
        </section>
      </div>
    </div>
  );
}

export default Petfoods;
