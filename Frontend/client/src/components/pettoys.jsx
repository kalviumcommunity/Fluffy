import React from "react";
import Navbar from "../HomeComponents/Navbar";
import { Link } from "react-router-dom";
import Black from "../images/best.jpg";
import main from "../images/petfood.jpg";
import Footer from "../HomeComponents/Footer";
import { Parallax } from "react-parallax";
import Toyshop from "./Toyshop";

function Pettoys() {
  return (
    <>
     <Parallax id="image" bgImage={main} strength={200}>
  <div style={{ height: "100vh", display: "flex", flexDirection: "column",paddingBottom:"130px",background:"rgba(0,0,0,0.5)" }}>
    <Navbar />
    <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
      <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", width: "100vw", alignItems: "center",color:"white" }}>
      <p style={{ transform: "rotate(90deg)", textAlign: "right", whiteSpace: "nowrap",fontSize:"0.7em" }}>SCROLL DOWN</p>
        <div style={{textAlign:"center"}}>
            <p style={{ fontSize: "6em", textAlign: "center",fontWeight:"500" }}>Fluffy <br /> Animal Society</p>
            <p style={{fontSize:"1.5em",paddingTop:"20px"}}> Bringing Joy to Every Pet with Our Toys</p>
        </div>
        <p style={{ transform: "rotate(90deg)", textAlign: "right", whiteSpace: "nowrap",fontSize:"0.7em"   }}>SCROLL DOWN</p>
      </div>
    </div>
  </div>
</Parallax>

        <section style={{ padding: "50px 350px", background: "#D4E8FF",lineHeight:"1.6" }}>
          <div>
          <h2
            style={{
              fontSize: "2rem",
              padding: "25px",
              textAlign: "center",
              color: "#00008B",
              textDecoration: "underline",
            }}
            >
            Fluffy Toys: <br /> Why Your Pets Needs Toys
          </h2>
          <div>
            <p>
              Pets benefit from toys in a number of ways, both physically and
              mentally. Here's a closer look at why toys are important for your
              furry (or feathery) friend:
            </p>
          </div>
          <div style={{paddingTop:"30px "}}>
            <h4 style={{ color: "#00008B",marginBottom:"5px" }}>
              Mental Stimulation and Stress Relief
            </h4>
            <p>
              In the wild, animals spend a significant amount of time hunting,
              stalking, and playing. Even domesticated pets retain these
              instincts. Toys provide an outlet for these natural behaviors,
              keeping them mentally stimulated and preventing boredom. A bored
              pet is more likely to engage in destructive chewing, barking, or
              scratching.
            </p>
          </div>
          <hr style={{ margin: "20px 0",borderColor:"#00008B" }} />
          <div>
            <h4 style={{ color: "#00008B",marginBottom:"5px"  }}>Exercise and Physical Health</h4>
            <p>
              {" "}
              Play with toys gets your pet moving, which is crucial for
              maintaining a healthy weight and strong muscles. This is
              especially important for indoor pets who may not get enough
              exercise otherwise. Interactive play sessions with you and their
              toys can provide a great workout.
            </p>
          </div>
          <hr style={{ margin: "20px 0",borderColor:"#00008B" }} />
          <div>
            <h4 style={{ color: "#00008B",marginBottom:"5px"  }}>Dental Health</h4>
            <p>
              Chew toys, especially for puppies and kittens, help satisfy their
              natural urge to chew. This can help prevent them from chewing on
              your furniture or other belongings. Certain dental chew toys can
              also help scrape away plaque and keep teeth clean.
            </p>
          </div>
          <hr style={{ margin: "20px 0",borderColor:"#00008B" }} />
          <div>
            <h4 style={{ color: "#00008B",marginBottom:"5px"  }}>Bonding and Training</h4>
            <p>
              Playing fetch, tug-of-war, or other interactive games with your
              pet is a fantastic way to bond with them. You can use toys to
              reward good behavior during training sessions, making learning a
              fun and positive experience.
            </p>
          </div>
          <hr style={{ margin: "20px 0",borderColor:"#00008B" }} />
          <div>
            <h4 style={{ color: "#00008B",marginBottom:"5px"  }}>Stress Relief</h4>
            <p>
              Just like us, pets can get stressed too. Play provides a healthy
              outlet for their energy and helps them relax. Interactive toys or
              puzzle feeders that challenge them mentally can be particularly
              beneficial in reducing stress levels.
            </p>
          </div>
          <hr style={{ margin: "20px 0",borderColor:"#00008B" }} />
          <div>
            <h4 style={{ color: "#00008B",marginBottom:"5px"  }}>Variety is Key</h4>
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
        <Toyshop/>
        <Footer/>
    </>
  );
}

export default Pettoys;
