import React from "react";
import Navbar from "../HomeComponents/Navbar";
import { Link } from "react-router-dom";
import Black from "../images/adopt1.webp";
import Black2 from "../images/adopt2.webp";
import main from "../images/food.png";
import Footer from "../HomeComponents/Footer";

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
              background: "#e6f3c9",
              height: "60vh",
              padding: "70px",
              borderRadius: "25px 0px 0px 25px",
              flex: "1",
            }}
          >
            <h2
              style={{
                fontSize: "2.5rem",
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

        <section style={{ padding: "50px 300px", background: "#e6f3c9",lineHeight:"1.6" }}>
          <div id="petfood" style={{overflow:"auto",height:"75vh",padding:"25px"}}>
          <h2
            style={{
              fontSize: "2rem",
              padding: "25px",
              textAlign: "center",
              color: "#388E3C",
              textDecoration: "underline",
            }}
            >
            Tailored Meals: <br /> Why Your Pet Needs Specific Food
          </h2>
            <div>
            <p>
              Just like you wouldn't eat the same thing every day, your furry
              friend shouldn't either! Pets have unique dietary needs that vary
              depending on several factors. Here's a quick dive into why
              "one-size-fits-all" pet food isn't ideal:
            </p>
          </div>
          <div style={{paddingTop:"30px"}}>
            <h4 style={{ color: "#388E3C" }}>Species Matters</h4>
            <p>
              Cats and dogs, our most common companions, have vastly different
              dietary requirements. Cats are obligate carnivores, needing animal
              protein for survival. Dog's, on the other hand, are omnivores and
              can thrive on a mix of protein, vegetables, and grains. Their food
              reflects this difference, with cat food being higher in animal
              protein and dog food offering a more balanced mix.
            </p>
          </div>
          <hr style={{ margin: "20px 0",borderColor:"#388E3C" }} />
          <div>
            <h4 style={{ color: "#388E3C" }}>Life Stages</h4>
            <p>
              A spunky puppy needs more protein and calories for growth than a
              senior dog looking to maintain a healthy weight. Similarly,
              pregnant or nursing pets have different needs than their inactive
              counterparts. Pet food comes in categories like "puppy," "adult,"
              and "senior" to address these varying requirements at each life
              stage.
            </p>
          </div>
          <hr style={{ margin: "20px 0",borderColor:"#388E3C" }} />
          <div>
            <h4 style={{ color: "#388E3C" }}>Activity Level</h4>
            <p>
              Think of your pet as a furry athlete! A high-energy Border Collie
              will burn calories much faster than a lounging pug. Active pets
              need food with more calories and nutrients to fuel their busy
              bodies, while less active pets need food formulated for weight
              management.
            </p>
          </div>
          <hr style={{ margin: "20px 0",borderColor:"#388E3C" }} />
          <div>
            <h4 style={{ color: "#388E3C" }}>Breed Matters</h4>
            <p>
              A Great Dane has different nutritional needs than a Chihuahua.
              Large-breed puppies especially need food designed for healthy bone
              growth, while smaller breeds might benefit from smaller kibble
              sizes for easier chewing and digestion.
            </p>
          </div>
          <hr style={{ margin: "20px 0",borderColor:"#388E3C" }} />
          <div>
            <h4 style={{ color: "#388E3C" }}>Health Concerns</h4>
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
        </div>
        </section>

        <section style={{margin:"80px 110px" }}>
          <h2
            style={{
              color: "#388E3C",
              textAlign: "center",
              paddingBottom: "50px",
              fontSize:"2em"
            }}
            >
            Explore Our Pet's Foods
          </h2>
          <div style={{ padding: "10px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", justifyContent: "space-between", alignItems: "center"}}>
            <Link to="/dog-foods" style={{textDecoration:"none"}}>
            <div style={{ border: "2px solid #388E3C", borderRadius: "10px", cursor: "pointer"}}>
              <img src={Black} alt="" style={{ height: "45vh", borderRadius: "8.5px 8.5px 0px 0px",width:"100%",objectFit:"cover"}} />
              <div style={{ padding: "15px", textAlign: "center", fontSize: "1.3em", color: "#388E3C",fontWeight:"bold"}}>Dog food and Treats</div>
            </div>
            </Link>
            <Link to="/cat-foods" style={{textDecoration:"none"}}>
            <div style={{ border: "2px solid #388E3C", borderRadius: "10px", cursor: "pointer"}}>
              <img src={Black} alt="" style={{ height: "45vh", borderRadius: "8.5px 8.5px 0px 0px",width:"100%",objectFit:"cover"}} />
              <div style={{ padding: "15px", textAlign: "center", fontSize: "1.3em", color: "#388E3C",fontWeight:"bold"}}>Cat food and Treats</div>
            </div>
            </Link>
          </div>
          <Link to="/" style={{textDecoration:"none"}}>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
            <div style={{ display: "flex", alignItems: "center",justifyContent:"space-evenly", padding: "10px", width: "11.5vw", borderRadius: "5px",backgroundColor:"#388E3C "}}>
              <img src="https://cdn-icons-png.flaticon.com/128/8213/8213587.png" alt="" style={{ height: "2.2vh" }} />
              <p style={{ margin: "0", marginLeft: "5px",color:"white" }}>Back to Home</p>
            </div>
          </div>
        </Link>
        </section>
        <section>
          <Footer/>
        </section>
      </div>
    </div>
  );
}

export default Petfoods;
