import React from "react";
import Navbar from "../HomeComponents/Navbar";
import { Link } from "react-router-dom";
import main from "../images/petfood1.avif";
import Footer from "../HomeComponents/Footer";
import { Parallax } from "react-parallax";
import Foodshop from "./Foodshop";

function Petfoods() {
  return (
    <>
      <Parallax id="image" bgImage={main} strength={300}>
        <div style={{ height: "100vh", display: "flex", flexDirection: "column", paddingBottom: "130px", background: "rgba(0,0,0,0.5)" }}>
          <Navbar />
          <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
            <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", width: "100vw", alignItems: "center", color: "white" }}>
              <p style={{ transform: "rotate(90deg)", textAlign: "right", whiteSpace: "nowrap", fontSize: "0.7em" }}>SCROLL DOWN</p>
              <div style={{textAlign:"center"}}>
                <p style={{ fontSize: "6em", textAlign: "center",fontWeight:"500" }}>Fluffy <br /> Animal Society</p>
                <p style={{fontSize:"1.5em",paddingTop:"20px"}}>Fuel Their Play with Fluffy's Pet Food</p>
              </div>
              <p style={{ transform: "rotate(90deg)", textAlign: "right", whiteSpace: "nowrap", fontSize: "0.7em" }}>SCROLL DOWN</p>
            </div>
          </div>
        </div>
      </Parallax>
      <section style={{ padding: "50px 350px", background: "#F3F9E0", lineHeight: "1.6" }}>
        <div>
          <h2
            style={{
              fontSize: "3rem",
              padding: "25px",
              textAlign: "center",
              color: "#388E3C",
              textDecoration: "underline",
            }}
          >
            Why Choose Fluffy for Your Pet Food?
          </h2>
          <div> 
            <h4 style={{ color: "#388E3C"}}>Species-Specific Nutrition</h4>
            <p>
              Cats and dogs have vastly different dietary requirements. At Fluffy, we recognize these differences:
              <ul style={{margin:"20px"}}>
                <li><strong style={{ color: "#388E3C" }}>Cats:</strong> As obligate carnivores, cats need animal protein for survival. Our cat food selections are high in animal protein to meet these needs.</li>
                <li><strong style={{ color: "#388E3C" }}>Dogs:</strong> Dogs are omnivores and thrive on a mix of protein, vegetables, and grains. Our dog food offers a balanced mix to support their health.</li>
              </ul>
            </p>
          </div>
          <hr style={{ margin: "20px 0", borderColor: "#388E3C" }} />
          <div>
            <h4 style={{ color: "#388E3C" }}>Life Stage Formulas</h4>
            <p>
              Pets have different nutritional needs at various stages of their lives. Fluffy offers tailored food options for every life stage:
              <ul style={{margin:"20px"}}>
                <li><strong style={{ color: "#388E3C" }}>Puppies and Kittens:</strong> High in protein and calories for growth.</li>
                <li><strong style={{ color: "#388E3C" }}>Adult Pets:</strong> Balanced nutrition to maintain health and energy.</li>
                <li><strong style={{ color: "#388E3C" }}>Senior Pets:</strong> Formulated to support aging joints and weight management.</li>
              </ul>
            </p>
          </div>
          <hr style={{ margin: "20px 0", borderColor: "#388E3C" }} />
          <div>
            <h4 style={{ color: "#388E3C" }}>Activity Level Adaptations</h4>
            <p>
              Every pet has a different activity level. Our products cater to these differences:
              <ul style={{margin:"20px"}}>
                <li><strong style={{ color: "#388E3C" }}>Active Pets:</strong> Foods with higher calorie content to fuel their energy.</li>
                <li><strong style={{ color: "#388E3C" }}>Less Active Pets:</strong> Weight management formulas to prevent obesity.</li>
              </ul>
            </p>
          </div>
          <hr style={{ margin: "20px 0", borderColor: "#388E3C" }} />
          <div>
            <h4 style={{ color: "#388E3C" }}>Breed-Specific Needs</h4>
            <p>
              Different breeds have specific dietary requirements. Fluffy provides:
              <ul style={{margin:"20px"}}>
                <li><strong style={{ color: "#388E3C" }}>Large Breeds:</strong> Food designed for healthy bone growth.</li>
                <li><strong style={{ color: "#388E3C" }}>Small Breeds:</strong> Smaller kibble sizes for easier chewing and digestion.</li>
              </ul>
            </p>
          </div>
          <hr style={{ margin: "20px 0", borderColor: "#388E3C" }} />
          <div>
            <h4 style={{ color: "#388E3C" }}>Health and Special Dietary Needs</h4>
            <p>
              Pets can have allergies, digestive issues, or other health concerns. We offer:
              <ul style={{margin:"20px"}}>
                <li><strong style={{ color: "#388E3C" }}>Special Diets:</strong> Limited ingredient options, probiotics, and other modifications to address specific health issues.</li>
              </ul>
            </p>
          </div>
          <div>
            <p>
              By understanding your pet's unique needs – species, age, activity level, breed, and any health concerns – you can choose a food that provides the optimal nutrition for a long and healthy life. When in doubt, consult your veterinarian for personalized guidance on your pet's dietary journey!
            </p>
          </div>
        </div>
      </section>
      <Foodshop />
      <Footer />
    </>
  );
}

export default Petfoods;
