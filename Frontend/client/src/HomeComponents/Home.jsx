import React, { useRef } from "react";
import { Parallax } from "react-parallax";
import Navbar from "./Navbar";
import Footer from "./Footer";
import best from "../images/best.jpg";
import back1 from "../images/best.jpg";
import love from "../images/home.jpg";
import Typewriter from "./Typewriter";
import { Link } from "react-router-dom";

function Home() {
  const adoptionRef = useRef(null);
  const foodRef = useRef(null);
  const toyRef = useRef(null);
  const reportRef = useRef(null);
  const hithereRef = useRef(null);

  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: 'start' });
  };

  return (
    <>
      <section id="homeback" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
        <div style={{ background: "rgba(0,0,0,0.6)" }}>
          <Navbar />
          <Typewriter />
        </div>
      </section>
      <section style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100%",padding:"100px",background:"#f8d7da" }}>
  <div style={{ flex: "1", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",padding:"20px" }}>
    <h1 style={{ fontSize: "5.5em" }}>Support Animal Welfare at Fluffy</h1>
    <div style={{ fontSize: "1.1em", lineHeight: "1.6", textAlign: "left" }}>
      At Fluffy, we are dedicated to rescuing pets, facilitating adoptions, and reuniting missing pets with their families. Join us in our mission to create a better world for pets.
      <br /><br />
      <p style={{fontWeight:"bold",color:"#007bff"}}>#AdoptDontShop #PetRescue #AnimalWelfare #FluffyCares #SupportAnimals</p>
    </div>
  </div>
  <section id="hithere" ref={hithereRef} style={{ padding: "50px 0", width: "50vw", background: "#af4cd1", height: "100%", display: "flex", alignItems: "center", justifyContent: "center",borderRadius:"50% 0 0 50%" }}>
    <section style={{ display: "grid", gridTemplateColumns: "repeat(2, 300px)", gap: "25px", justifyContent: "center", alignItems: "center" }}>
      <div style={{ background: "#6c757d", color: "white", padding: "30px", borderRadius: "10px", textAlign: "center" }}>
        <h2 style={{ fontSize: "3em" }}>45,000+</h2>
        <p>Pets Rescued</p>
      </div>
      <div style={{ background: "#007bff", color: "white", padding: "30px", borderRadius: "10px", textAlign: "center" }}>
        <h2 style={{ fontSize: "3em" }}>1,200+</h2>
        <p>Pets Adopted</p>
      </div>
      <div style={{ background: "#28a745", color: "white", padding: "30px", borderRadius: "10px", textAlign: "center" }}>
        <h2 style={{ fontSize: "3em" }}>4,000+</h2>
        <p>Pets Reported</p>
      </div>
      <div style={{ background: "#ffc107", color: "white", padding: "30px", borderRadius: "10px", textAlign: "center" }}>
        <h2 style={{ fontSize: "3em" }}>99%</h2>
        <p>Customer Satisfaction</p>
      </div>
      <div style={{ background: "#dc3545", color: "white", padding: "30px", borderRadius: "10px", textAlign: "center" }}>
        <h2 style={{ fontSize: "3em" }}>500+</h2>
        <p>Volunteers</p>
      </div>
      <div style={{ background: "#17a2b8", color: "white", padding: "30px", borderRadius: "10px", textAlign: "center" }}>
        <h2 style={{ fontSize: "3em" }}>200+</h2>
        <p>Events Held</p>
      </div>
    </section>
  </section>
</section>



      <section id="hithere" ref={hithereRef} style={{ padding: "100px", position: "relative", }}>
        <section style={{ display: "flex" }}>
          <div
            style={{
              boxSizing: "border-box",
              position: "sticky",
              width: "50vw",
              top: "100px",
              alignSelf: "flex-start",
            }}
          >
            {/* Navigation Links */}
            <div>
              <h1 style={{ fontSize: "2em" }}>Services</h1>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: "20px 0",
                padding: "25px",
                background: "#6f42c1",
                color: "white",
                cursor: "pointer",
                borderRadius: "15px",
                fontWeight: "bold",
              }}
              onClick={() => handleScroll(adoptionRef)}
            >
              <img src="https://cdn-icons-png.flaticon.com/128/5267/5267453.png" alt="" style={{ height: "70px" }} />
              <p style={{ paddingLeft: "30px" }}>ADOPT A PET</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: "20px 0",
                padding: "25px",
                background: "#28a745",
                color: "white",
                cursor: "pointer",
                borderRadius: "15px",
                fontWeight: "bold",
              }}
              onClick={() => handleScroll(foodRef)}
            >
              <img src="https://cdn-icons-png.flaticon.com/128/4716/4716331.png" alt="" style={{ height: "70px" }} />
              <p style={{ paddingLeft: "30px" }}>BUY PET FOOD</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: "20px 0",
                padding: "25px",
                background: "#007bff",
                color: "white",
                cursor: "pointer",
                borderRadius: "15px",
                fontWeight: "bold",
              }}
              onClick={() => handleScroll(toyRef)}
            >
              <img src="https://cdn-icons-png.flaticon.com/128/7438/7438546.png" alt="" style={{ height: "70px" }} />
              <p style={{ paddingLeft: "30px" }}>BUY PET TOY</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: "20px 0",
                padding: "25px",
                background: "#dc3545",
                color: "white",
                cursor: "pointer",
                borderRadius: "15px",
                fontWeight: "bold",
              }}
              onClick={() => handleScroll(reportRef)}
            >
              <img src="https://cdn-icons-png.flaticon.com/128/2353/2353855.png" alt="" style={{ height: "70px" }} />
              <p style={{ paddingLeft: "30px" }}>REPORT A PET</p>
            </div>
          </div>
          <div
            id="body"
            style={{
              height: "100%",
              margin: "60px ",
              textAlign: "left",
              width: "58vw",
              color: "black",
              lineHeight: "1.6"
            }}
          >
            {/* Content Sections */}
            <div ref={foodRef} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "75vh", border: "2px solid #6f42c1", borderRadius: "20px", background: "#E6E6FA", padding: " 40px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", width: "62vw" }}>
                <div>
                  <h1 style={{ fontSize: "4em" }}>Want to adopt a pet</h1>
                  <p style={{ paddingTop: "10px", width: "40vw" }}>
                    Adopting a pet brings joy and saves lives. By choosing adoption, you alleviate shelter overcrowding and gain a loyal companion. It's a socially responsible choice that forms a special bond.
                  </p>
                </div>
                <h1 style={{ transform: "rotate(-90deg)", textAlign: "right", whiteSpace: "nowrap", color: "#6f42c1", fontSize: "1em" }}>ADOPT A PET</h1>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ alignSelf: "flex-start", cursor: "pointer" }}>
                  <Link to="/adopt-pets" style={{ textDecoration: "none" }}><h1 style={{ padding: "12px 40px", borderRadius: "10px", border: "1px solid black ", color: "#6f42c1" }}>Explore</h1></Link>
                </div>
                <div style={{width:"20vw"}}>
                  <h1>Here's what you can do</h1>
                  <div style={{ paddingTop: "15px" }}>
                    <p>Support animal shelters</p>
                    <p>Promote adoption</p>
                    <p>Educate on adopting animals</p>
                  </div>
                </div>
              </div>
            </div>
            <div ref={foodRef} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "75vh", border: "2px solid #28a745", borderRadius: "20px", background: "#F3F9E0", padding: "40px", marginTop: "180px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", width: "62vw" }}>
                <div>
                  <h1 style={{ fontSize: "4em" }}>Want to buy pet food</h1>
                  <p style={{ paddingTop: "10px", width: "40vw" }}>
                    Quality pet food ensures health and energy. The right nutrition prevents issues. Choose food that meets their needs.
                  </p>
                </div>
                <h1 style={{ transform: "rotate(-90deg)", textAlign: "right", whiteSpace: "nowrap", color: "#28a745", fontSize: "1em" }}>BUY PET FOOD</h1>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ alignSelf: "flex-start", cursor: "pointer" }}>
                  <Link to="/pet-foods" style={{ textDecoration: "none" }}><h1 style={{ padding: "12px 40px", borderRadius: "10px", border: "1px solid black ", color: "#28a745" }}>Explore</h1></Link>
                </div>
                <div style={{width:"20vw"}}>
                  <h1>Here's what you can do</h1>
                  <div style={{ paddingTop: "15px" }}>
                    <p>Choose natural ingredients</p>
                    <p>Consult your Vet</p>
                    <p>Update diet as they age</p>
                  </div>
                </div>
              </div>
            </div>
            <div ref={toyRef} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "75vh", border: "2px solid #007bff", borderRadius: "20px", background: "#DFF0FF", padding: "40px", marginTop: "180px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", width: "61vw" }}>
                <div>
                  <h1 style={{ fontSize: "4em" }}>Want to buy pet Toy</h1>
                  <p style={{ paddingTop: "10px", width: "40vw" }}>
                    Pet toys are vital for well-being. They prevent boredom and promote exercise. Choose safe, suitable toys.
                  </p>
                </div>
                <h1 style={{ transform: "rotate(-90deg)", textAlign: "right", whiteSpace: "nowrap", color: "#007bff", fontSize: "1em" }}>BUY PET TOY</h1>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ alignSelf: "flex-start", cursor: "pointer" }}>
                  <Link to="/pet-toys" style={{ textDecoration: "none" }}><h1 style={{ padding: "12px 40px", borderRadius: "10px", border: "1px solid black ", color: "#007bff" }}>Explore</h1></Link>
                </div>
                <div style={{width:"20vw"}}>
                  <h1>Here's what you can do</h1>
                  <div style={{ paddingTop: "15px" }}>
                    <p>Rotate toys regularly to keep engagement.</p>
                    <p>Choose eco-friendly materials.</p>
                    <p>Monitor playtime</p>
                  </div>
                </div>
              </div>
            </div>
            <div ref={reportRef} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "75vh", border: "2px solid #dc3545", borderRadius: "20px", background: "#FFEDDE", padding: "40px", marginTop: "180px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", width: "61vw" }}>
                <div>
                  <h1 style={{ fontSize: "4em" }}>Want to report a pet</h1>
                  <p style={{ paddingTop: "10px", width: "40vw" }}>
                    Act quickly to reunite with a lost pet. Report to shelters and use social media. Proper identification helps in a swift return.
                  </p>
                </div>
                <h1 style={{ transform: "rotate(-90deg)", textAlign: "right", whiteSpace: "nowrap", color: "#dc3545", fontSize: "1em" }}>REPORT A PET</h1>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ alignSelf: "flex-start", cursor: "pointer" }}>
                  <Link to="/report-pets" style={{ textDecoration: "none" }}><h1 style={{ padding: "12px 40px", borderRadius: "10px", border: "1px solid black ", color: "crimson" }}>Explore</h1></Link>
                </div>
                <div style={{width:"20vw"}}>
                  <h1>Here's what you can do</h1>
                  <div style={{ paddingTop: "15px" }}>
                    <p>Keep recent photos for identification.</p>
                    <p>Educate your community on reporting found pets</p>
                    <p>Consult our fluffy website</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section style={{ display: "flex", alignItems: "center", height: "100vh", width: "100%", background: "#f5deb3",padding:"100px",borderRadius:"50%",marginBottom:"100px" }}>
        <div style={{ flex: "2", height: "100%" }}>
          <img src={back1} alt="" style={{ width: "100%", height: "100%", objectFit: "cover",borderRadius:"25px" }} />
        </div>
        <div style={{ flex: "1", padding: "50px" }}>
          <p style={{ fontSize: "5.5em", fontWeight: "bold" }}>Work with us</p>
          <p style={{ fontSize: "1em" }}>Need help with one or all of the services above? Get in touch.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "20px" }}>
            <input type="text" placeholder="State your name" required style={{ padding: "12px", fontSize: "1em", border: "1px solid black", borderRadius: "7px" }} />
            <input type="text" placeholder="State your email" required style={{ padding: "12px", fontSize: "1em", border: "1px solid black", borderRadius: "7px" }} />
            <textarea placeholder="State your business" required style={{ padding: "12px", fontSize: "1em", border: "1px solid black", borderRadius: "7px", height: "150px" }} />
            <input type="submit" name="" id="" style={{ width: "10vw", padding: "15px", marginTop: "20px", fontSize: "1em", borderRadius: "25px", border: "none", cursor: "pointer", background: "brown", color: "white" }} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
