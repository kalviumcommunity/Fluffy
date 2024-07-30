import React, { useState } from "react";
import Navbar from "../HomeComponents/Navbar.jsx";
import main from "../images/adopt4.jpg";
import AdoptionPetdata from "../apicalls.jsx/AdoptionPetdata.jsx";
import Footer from "../HomeComponents/Footer.jsx";
import { Parallax } from "react-parallax";
import Reportform from "../Forms/Report.jsx";

function Adoption() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <Parallax id="image" bgImage={main} strength={200}>
        <div
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            paddingBottom: "100px",
            background: "rgba(0,0,0,0.5)",
          }}
        >
          <Navbar />
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                width: "100vw",
                alignItems: "center",
                color: "white",
              }}
            >
              <p
                style={{
                  transform: "rotate(90deg)",
                  textAlign: "right",
                  whiteSpace: "nowrap",
                  fontSize: "0.7em",
                }}
              >
                SCROLL DOWN
              </p>
              <div>
                <p
                  style={{
                    fontSize: "5.5em",
                    textAlign: "center",
                    fontWeight: "500",
                  }}
                >
                  Fluffy <br /> Animal Society
                </p>
                <p
                  style={{
                    textAlign: "center",
                    paddingTop: "20px",
                    fontSize: "1.1em",
                  }}
                >
                  A non-profit trust helping animals in Coimbatore, India, since
                  (I don't know)
                </p>
              </div>
              <p
                style={{
                  transform: "rotate(90deg)",
                  textAlign: "right",
                  whiteSpace: "nowrap",
                  fontSize: "0.7em",
                }}
              >
                SCROLL DOWN
              </p>
            </div>
          </div>
        </div>
      </Parallax>
      <section
        style={{
          padding: "50px 350px",
          background: "#F5F0FF",
          lineHeight: "1.6",
          height: "100%",
        }}
      >
        <div>
          <h4
            style={{
              color: "#6504b5",
              textAlign: "center",
              paddingBottom: "30px",
              fontSize: "2em",
            }}
          >
            Welcome to Fluffy <br /> Where Every Adoption Tells a Story
          </h4>
          <p>
            At Fluffy, we believe in the transformative power of pet adoption.
            Every year, millions of pets end up in shelters, waiting for their
            forever homes. By adopting a pet from Fluffy, not only are you
            giving an animal a second chance at life, but you're also gaining a
            loyal companion who will bring joy and love into your home.
          </p>
          <p>
            Did you know that adopting a pet can improve your mental and
            physical health? Studies have shown that having a pet can reduce
            stress, lower blood pressure, and even decrease the risk of heart
            disease. Plus, adopting from shelters helps reduce pet
            overpopulation and supports responsible pet ownership. When you
            choose to adopt from Fluffy, you're not just getting a pet – you're
            making a difference in the lives of animals in need.
          </p>
          <hr style={{ margin: "20px 0", borderColor: "#6504b5" }} />
          <div>
            <h3
              style={{
                color: "#6504b5",
                textAlign: "center",
                textDecoration: "underline",
                padding: "30px",
                fontSize: "1.5em",
              }}
            >
              Paws and You <br /> Things to Consider Before Adopting a Dog
            </h3>
            <p>
              Bringing a furry friend into your life can be an enriching
              experience but it also comes with its fair share of
              responsibilities. Before you decide to adopt a dog, it’s essential
              to consider various factors to ensure a happy and healthy
              relationship between you and your future four-legged companion.
              Here are some things to keep in mind before you take the plunge
              into pet parenthood.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                paddingTop: "20px",
              }}
            >
              <div>
                <h4 style={{ color: "#6504b5", paddingBottom: "10px" }}>
                  Lifestyle assessment
                </h4>
                <p>
                  Start by evaluating your daily routine and lifestyle. Dogs
                  require time, attention, and exercise. This can directly affect
                  their behavior. Consider your work schedule, social
                  commitments, and hobbies. If you lead a hectic life that leaves
                  little room for a pet, it might be wise to wait until you have
                  more time to dedicate to a furry friend.
                </p>
              </div>
              <hr style={{ margin: "20px 0", borderColor: "#6504b5" }} />
              <div>
                <h4 style={{ color: "#6504b5", paddingBottom: "10px" }}>
                  Space and environment
                </h4>
                <p>
                  Dogs, regardless of their size, need ample space to move
                  around and play. Assess your living situation, whether it’s an
                  apartment, house, or a shared space. Some breeds thrive in
                  smaller spaces, while others require a yard for exercise.
                  Ensure your living situation is suitable for the specific
                  needs of the dog you’re considering.
                </p>
              </div>
              <hr style={{ margin: "20px 0", borderColor: "#6504b5" }} />
              <div>
                <h4 style={{ color: "#6504b5", paddingBottom: "10px" }}>
                  Allergies and health concerns
                </h4>
                <p>
                  Allergies can be a significant consideration when adopting a
                  dog. Some breeds are known to be hypoallergenic, while others
                  may trigger allergic reactions in sensitive individuals.
                  Additionally, be prepared for potential health issues and the
                  associated costs of veterinary care.
                </p>
              </div>
              <hr style={{ margin: "20px 0", borderColor: "#6504b5" }} />
              <div>
                <h4 style={{ color: "#6504b5", paddingBottom: "10px" }}>
                  Breed characteristics
                </h4>
                <p>
                  Each dog breed has unique characteristics, including size,
                  energy levels, grooming needs, and temperament. Research
                  different breeds to find one that aligns with your preferences
                  and lifestyle. Consider whether you want an active dog for
                  outdoor adventures or a more laid-back companion.
                </p>
              </div>
              <hr style={{ margin: "20px 0", borderColor: "#6504b5" }} />
              <div>
                <h4 style={{ color: "#6504b5", paddingBottom: "10px" }}>
                  Financial commitment
                </h4>
                <p>
                  Caring for a dog comes with various costs, including food,
                  grooming, veterinary care, and supplies. Be prepared for the
                  financial responsibility that comes with pet parenthood.
                  Unexpected medical expenses can arise, so having a financial
                  safety net for your pet is crucial.
                </p>
              </div>
              <hr style={{ margin: "20px 0", borderColor: "#6504b5" }} />
              <div>
                <h4 style={{ color: "#6504b5", paddingBottom: "10px" }}>
                  Time and training
                </h4>
                <p>
                  Dogs require time and patience for training. Puppies, in
                  particular, need consistent training to become well-behaved
                  adults. Consider whether you have the time and energy to
                  invest in training and socializing your new companion.
                </p>
              </div>
              <hr style={{ margin: "20px 0", borderColor: "#6504b5" }} />
              <div>
                <h4 style={{ color: "#6504b5", paddingBottom: "10px" }}>
                  Long-term commitment
                </h4>
                <p>
                  Dogs have relatively long lifespans, and adopting one is a
                  commitment that lasts many years. Consider your plans, such as
                  career changes, moving, or starting a family, and how a dog
                  fits into those plans. Ensure you’re ready for the long-term
                  commitment and responsibility of pet parenthood.
                </p>
              </div>
              <hr style={{ margin: "20px 0", borderColor: "#6504b5" }} />
              <div>
                <h4 style={{ color: "#6504b5", paddingBottom: "10px" }}>
                  Shelter or breeder
                </h4>
                <p>
                  Decide whether to adopt from a shelter or purchase from a
                  reputable breeder. Both options have pros and cons, but
                  adopting from a shelter can be a fulfilling experience as
                  you’re providing a loving home for a deserving dog.
                </p>
              </div>
              <p>
                Adopting a dog is a life-changing decision that requires careful
                consideration. By assessing your lifestyle, living situation, and
                personal preferences, you can make an informed choice that leads
                to a happy and harmonious relationship with your new canine
                companion. Remember, a dog is not just a pet; they become an
                integral part of your family, bringing joy, love, and loyalty
                into your life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <AdoptionPetdata />
      </section>
      <section
        onClick={togglePopup}
        style={{
          position: "fixed",
          top: "85%",
          right: "0%",
          cursor: "pointer",
          display: "flex",
          background: "#6504b5",
          color: "white",
          padding: "10px",
          borderRadius:"25px 0px 0 25px"
        }}
      >
        <img src="https://cdn-icons-png.flaticon.com/128/2353/2353855.png" alt="" style={{ height: "30px" }} />
        <button
          style={{
            background: "#6504b5",
            color: "white",
            border: "none",
            padding: "5px",
          }}
        >
          Adoption Form
        </button>
      </section>

      {isPopupOpen && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              borderRadius: "10px",
              position: "relative",
              height: "auto",
            }}
          >
            <button
              onClick={togglePopup}
              style={{
                position: "absolute",
                top: "40px",
                right: "40px",
                background: "crimson",
                color: "white",
                border: "none",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                cursor: "pointer",
              }}
            >
              X
            </button>
            <Reportform />
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default Adoption;
