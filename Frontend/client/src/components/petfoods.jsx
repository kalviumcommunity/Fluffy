import React from "react";
import Navbar from "../HomeComponents/Navbar";
import Black from "../images/adopt2.webp";
import Black2 from "../images/dog.webp";
import main from "../images/food.png";

function Petfoods() {
  return (
    <>
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
                  fontSize: "1rem",
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

        <section style={{ padding: "50px 350px", background: "#F9FFF3" }}>
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
        <section style={{ padding: "50px 320px" }}>
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
                <h3>From Tiny Paws to Mighty Walks: Puppy Food</h3>
                <p>
                  Fuel their playful spirit and support healthy growth for epic
                  adventures to come! This puppy food provides the perfect
                  foundation for strong bodies and sharp minds. #GrowingPaws
                  #FuelTheFun
                </p>
                <button
                  style={{
                    background: "#388E3C",
                    border: "none",
                    color: "white",
                    marginTop: "50px",
                    padding: "5px 15px",
                    borderRadius: "5px",
                  }}
                >
                  Explore
                </button>
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
                <h3>Unleashing Their Potential: Young Dog Food</h3>
                <p>
                  From playful pup to powerful partner. This young dog food
                  offers balanced nutrition to build strong muscles, healthy
                  joints, and a radiant coat. Every adventure starts with the
                  right fuel! #GrowingStrong #AdventureAwaits
                </p>
                <button
                  style={{
                    background: "#388E3C",
                    border: "none",
                    color: "white",
                    marginTop: "50px",
                    padding: "5px 15px",
                    borderRadius: "5px",
                  }}
                >
                  Explore
                </button>
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
                <h3>A Lifetime of Love: Senior Dog Food</h3>
                <p>
                  Nourish your cherished companion for every golden moment. This
                  senior dog food provides tailored nutrition for their
                  continued health and well-being. Embrace every walk and cuddle
                  with your best friend. #SeniorLove #LoyalCompanions
                </p>
                <button
                  style={{
                    background: "#388E3C",
                    border: "none",
                    color: "white",
                    marginTop: "50px",
                    padding: "5px 15px",
                    borderRadius: "5px",
                  }}
                >
                  Explore
                </button>
              </div>
            </div>
          </div>
        </section>
        <section style={{ padding: "50px 320px" }}>
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
                <h3>From Curious Kittens to Agile Hunters: Kitten Food</h3>
                <p>
                  Fuel their playful curiosity and support healthy development
                  for a lifetime of purrs! This kitten food provides the perfect
                  foundation for strong bodies and sharp minds. #GrowingWhiskers
                  #FuelThePurrfectLife
                </p>
                <button
                  style={{
                    background: "#388E3C",
                    border: "none",
                    color: "white",
                    marginTop: "50px",
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
                <h3>Unleashing the Inner Athlete: Young Cat Food</h3>
                <p>
                  From playful pounce to powerful grace. This young cat food
                  offers balanced nutrition for building lean muscle, healthy
                  joints, and a gleaming coat. Every adventure starts with the
                  right fuel! #GrowingStrong #AgileGrace
                </p>
                <button
                  style={{
                    background: "#388E3C",
                    border: "none",
                    color: "white",
                    marginTop: "50px",
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
                <h3>A Lifetime of Companionship: Senior Cat Food</h3>
                <p>
                  Nourish your cherished companion for every golden nap. This
                  senior cat food provides tailored nutrition for their
                  continued health and well-being. Embrace every cuddle and purr
                  with your best friend. #SeniorLove #LoyalCompanions
                </p>
                <button
                  style={{
                    background: "#388E3C",
                    border: "none",
                    color: "white",
                    marginTop: "50px",
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
      </div>
    </>
  )
}

export default Petfoods;
