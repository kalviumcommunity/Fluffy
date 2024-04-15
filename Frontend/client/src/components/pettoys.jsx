import React from "react";
import Navbar from "../HomeComponents/Navbar";
import { Link } from "react-router-dom";
import Black from "../images/adopt2.webp";
import Black2 from "../images/adopt1.webp";
import main from "../images/dog.webp";

function Pettoys() {
  return (
    <div>
      <Navbar />
      <div>
        <section
          style={{
            display: "flex",
            padding: "10px",
            position: "relative",
            lineHeight: "1.6",
          }}
        >
          <img
            src={main}
            alt="Adopt"
            style={{
              borderRadius: "25px 0 0 25px",
              height: "60vh",
              flex: 1,
              objectFit: "cover",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center", // Center the content vertically
              background: "#BFE1FF",
              height: "60vh",
              padding: "70px",
              borderRadius: "0px 25px 25px 0px",
              flex: "1",
            }}
          >
            <h2
              style={{
                fontSize: "2.5rem",
                color: "#00008B",
                textAlign: "center",
              }}
            >
              Pawsome Playtime: Unleash the Fun with Our Pet Toys!
            </h2>
            <p
              style={{ fontSize: "1rem", color: "black", textAlign: "center" }}
            >
              Keep boredom at bay with exciting toys that fuel your pet's
              natural instincts for play.
            </p>
            <div style={{ textAlign: "center" }}>
              <button
                style={{
                  width: "100px",
                  height: "100px",
                  padding: "10px",
                  fontSize: "1rem",
                  background: "#00008B",
                  color: "white",
                  borderRadius: "50%",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Explore
              </button>
            </div>
          </div>
        </section>

        <section style={{ padding: "50px 360px", background: "#D4E8FF" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              padding: "20px",
              textAlign: "center",
              color: "#00008B",
              textDecoration: "underline",
            }}
          >
            Why Your Pets Needs Toys
          </h2>
          <div>
            <p>
              Pets benefit from toys in a number of ways, both physically and
              mentally. Here's a closer look at why toys are important for your
              furry (or feathery) friend:
            </p>
          </div>
          <div>
            <h5 style={{ color: "#00008B" }}>
              Mental Stimulation and Stress Relief
            </h5>
            <p>
              In the wild, animals spend a significant amount of time hunting,
              stalking, and playing. Even domesticated pets retain these
              instincts. Toys provide an outlet for these natural behaviors,
              keeping them mentally stimulated and preventing boredom. A bored
              pet is more likely to engage in destructive chewing, barking, or
              scratching.
            </p>
          </div>
          <hr />
          <div>
            <h5 style={{ color: "#00008B" }}>Exercise and Physical Health</h5>
            <p>
              {" "}
              Play with toys gets your pet moving, which is crucial for
              maintaining a healthy weight and strong muscles. This is
              especially important for indoor pets who may not get enough
              exercise otherwise. Interactive play sessions with you and their
              toys can provide a great workout.
            </p>
          </div>
          <hr />
          <div>
            <h5 style={{ color: "#00008B" }}>Dental Health</h5>
            <p>
              Chew toys, especially for puppies and kittens, help satisfy their
              natural urge to chew. This can help prevent them from chewing on
              your furniture or other belongings. Certain dental chew toys can
              also help scrape away plaque and keep teeth clean.
            </p>
          </div>
          <hr />
          <div>
            <h5 style={{ color: "#00008B" }}>Bonding and Training</h5>
            <p>
              Playing fetch, tug-of-war, or other interactive games with your
              pet is a fantastic way to bond with them. You can use toys to
              reward good behavior during training sessions, making learning a
              fun and positive experience.
            </p>
          </div>
          <hr />
          <div>
            <h5 style={{ color: "#00008B" }}>Stress Relief</h5>
            <p>
              Just like us, pets can get stressed too. Play provides a healthy
              outlet for their energy and helps them relax. Interactive toys or
              puzzle feeders that challenge them mentally can be particularly
              beneficial in reducing stress levels.
            </p>
          </div>
          <hr />
          <div>
            <h5 style={{ color: "#00008B" }}>Variety is Key</h5>
            <p>
              Just like us, pets can get bored with the same old toys. Rotate
              their toys periodically to keep things interesting. Consider
              choosing toys that cater to their natural instincts: squeaky toys
              for dogs, feathery wands for cats, and chew toys for both.
            </p>
          </div>
          <div>
            <p>
              By providing your pet with a variety of stimulating and safe toys,
              you're contributing to their overall well-being and happiness.
            </p>
          </div>
        </section>

        <section style={{ padding: "50px 300px" }}>
          <h2
            style={{
              color: "#00008B",
              textDecoration: "underline",
              textAlign: "center",
              paddingBottom: "50px",
            }}
          >
            Explore Our Dog's Toys
          </h2>
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
                <h3>Chew Toys</h3>
                <p>
                  Keep your pup entertained and promote dental health with our
                  durable chew toys. Choose from a variety of shapes and
                  textures for hours of satisfying chewing.
                </p>
                <Link to="/dog's-toys">
                  <button
                    style={{
                      background: "#00008B",
                      border: "none",
                      color: "white",
                      marginTop: "50px",
                      padding: "5px 15px",
                      borderRadius: "5px",
                    }}
                  >
                    Explore o
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <hr />
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
                <h3>Interactive Toys</h3>
                <p>
                  Elevate playtime with our interactive toys! Challenge your
                  dog's mind and keep them engaged with treat-dispensing puzzles
                  and games.
                </p>
                <button
                  style={{
                    background: "#00008B",
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
          <hr />
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
                <h3>Plush Toys</h3>
                <p>
                  Give your furry friend the gift of comfort with our soft and
                  cuddly plush toys. Perfect for snuggling and playtime fun.
                </p>
                <button
                  style={{
                    background: "#00008B",
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
                <h3>Fetch Toys</h3>
                <p>
                  Senior dog foods contain nutrients and characteristics that
                  are used to improve the health of the aging dog. Aging in dogs
                  causes many changes to occur physiologically that will require
                  a change in nutrient composition of their diet.
                </p>
                <button
                  style={{
                    background: "#00008B",
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
        <section style={{ padding: "50px 300px" }}>
          <h2
            style={{
              color: "#00008B",
              textDecoration: "underline",
              textAlign: "center",
              paddingBottom: "50px",
            }}
          >
            Explore Our Cat's Toys
          </h2>
          <div>
            <div
              style={{ display: "flex", alignItems: "center", padding: "20px" }}
            >
              <div style={{ padding: "20px" }}>
                <h3>Interactive Toys</h3>
                <p>
                  Keep your cat entertained and mentally sharp with our
                  interactive toys! From feather wands to laser pointers, we
                  have everything to engage your cat's natural instincts and
                  provide hours of fun.
                </p>
                <button
                  style={{
                    background: "#00008B",
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
          <hr />
          <div>
            <div
              style={{ display: "flex", alignItems: "center", padding: "20px" }}
            >
              <div style={{ padding: "20px" }}>
                <h3>Scratching Posts</h3>
                <p>
                  Protect your furniture and keep your cat's claws healthy with
                  our scratching posts! Made from durable materials and
                  available in various sizes and designs, our scratching posts
                  provide the perfect outlet for your cat's scratching
                  instincts.
                </p>
                <button
                  style={{
                    background: "#00008B",
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
          <hr />
          <div>
            <div
              style={{ display: "flex", alignItems: "center", padding: "20px" }}
            >
              <div style={{ padding: "20px" }}>
                <h3>Feather Toys</h3>
                <p>
                  Stimulate your cat's hunting instincts with our feather toys!
                  Watch as your cat pounces and chases after these feather
                  wonders, providing mental and physical exercise while having a
                  blast.
                </p>
                <button
                  style={{
                    background: "#00008B",
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
          <div>
            <div
              style={{ display: "flex", alignItems: "center", padding: "20px" }}
            >
              <div style={{ padding: "20px" }}>
                <h3>Catnip Toys</h3>
                <p>
                  Treat your cat to the ultimate sensory experience with our
                  catnip toys! Made with high-quality catnip, these toys will
                  stimulate your cat's senses and provide hours of playful
                  excitement.
                </p>
                <button
                  style={{
                    background: "#00008B",
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
          <Link to="/" style={{ textDecoration: "none", color: "#00008B" }}>
            <p>
              <strong>&lt;&lt; Back</strong>
            </p>
          </Link>
        </section>
      </div>
    </div>
  );
}

export default Pettoys;
