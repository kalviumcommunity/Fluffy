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
          <div id="pettoy" style={{overflow:"auto",height:"70vh",padding:"25px"}}>
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
          </div>
        </section>
        <section style={{margin:"100px 110px" }}>
          <h2
            style={{
              color: "#00008B",
              textDecoration: "underline",
              textAlign: "center",
              paddingBottom: "50px",
            }}
            >
            Explore Our Pet's Toys
          </h2>
          <div style={{ padding: "10px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", justifyContent: "space-between", alignItems: "center"}}>
            <Link to="/dog-toys" style={{textDecoration:"none"}}>
            <div style={{ border: "2px solid #00008B", borderRadius: "6.5px", cursor: "pointer"}}>
              <img src={Black} alt="" style={{ height: "50vh", borderRadius: "5px 5px 0px 0px",width:"100%"}} />
              <div style={{ padding: "15px", textAlign: "center", fontSize: "1.3em", color: "#00008B",fontWeight:"bold"}}>Explore Dog's Toys</div>
            </div>
            </Link>
            <Link to="/cat-toys" style={{textDecoration:"none"}}>
            <div style={{ border: "2px solid #00008B", borderRadius: "6.5px", cursor: "pointer"}}>
              <img src={Black} alt="" style={{ height: "50vh", borderRadius: "5px 5px 0px 0px",width:"100%"}} />
              <div style={{ padding: "15px", textAlign: "center", fontSize: "1.3em", color: "#00008B",fontWeight:"bold"}}>Explore Cat's Toys</div>
            </div>
            </Link>
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
