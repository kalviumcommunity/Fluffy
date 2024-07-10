import React, { useRef } from "react";
import { Parallax } from "react-parallax";
import Navbar from "./Navbar";
import Footer from "./Footer";
import black from '../images/black.jpg';

function Home() {
  const adoptionRef = useRef(null);
  const reportRef = useRef(null);
  const foodRef = useRef(null);
  const toyRef = useRef(null);
  const hithereRef = useRef(null);

  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: 'start' });
  };

  return (
    <>
      <Navbar />
      <section>
        <Parallax className="image" bgImage={black} strength={400}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "90vh",
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              textAlign: "center",
              padding: "20px",
              borderRadius: "10px",
            }}
          > 
            <h1 style={{ margin: 0 }}>Welcome to </h1>
            <h1 style={{ fontSize: "5em", margin: 0 }}>Fluffy</h1>
          </div>
        </Parallax>
      </section>
      <section id="hithere" ref={hithereRef} style={{ margin: "60px", position: "relative"}}>
        <section style={{ display: "flex" }}>
          <div
            style={{
              boxSizing: "border-box",
              position: "sticky",
              width: "27vw",
              top: "50px",
              alignSelf: "flex-start"
            }}
          >
          <div>
            <h1>Services</h1>
          </div>
          <div 
              style={{display:"flex",alignItems:"center", margin: "30px 0", padding: "20px", background: "#6f42c1", color:"white", cursor: "pointer",borderRadius:"15px",fontWeight:"bold", }}
                onClick={() => handleScroll(adoptionRef)}
               >
              <img src="https://cdn-icons-png.flaticon.com/128/5267/5267453.png" alt=""  style={{height:"70px"}}/>
              <p style={{paddingLeft:"30px"}}>ADOPT A PET</p>
          </div>
          <div 
              style={{display:"flex",alignItems:"center", margin: "30px 0", padding: "20px", background: "#dc3545", color:"white", cursor: "pointer",borderRadius:"15px",fontWeight:"bold", }}
                onClick={() => handleScroll(adoptionRef)}
               >
              <img src="https://cdn-icons-png.flaticon.com/128/2353/2353855.png" alt=""  style={{height:"70px"}}/>
              <p style={{paddingLeft:"30px"}}>REPORT A PET</p>
          </div>
          <div 
              style={{display:"flex",alignItems:"center", margin: "30px 0", padding: "20px", background: "#28a745", color:"white", cursor: "pointer",borderRadius:"15px",fontWeight:"bold", }}
                onClick={() => handleScroll(adoptionRef)}
               >
              <img src="https://cdn-icons-png.flaticon.com/128/4716/4716331.png" alt=""  style={{height:"70px"}}/>
              <p style={{paddingLeft:"30px"}}>BUY PET FOOD</p>
          </div>
          <div 
              style={{display:"flex",alignItems:"center", margin: "30px 0", padding: "20px", background: "#007bff", color:"white", cursor: "pointer",borderRadius:"15px",fontWeight:"bold", }}
                onClick={() => handleScroll(adoptionRef)}
               >
              <img src="https://cdn-icons-png.flaticon.com/128/7438/7438546.png" alt=""  style={{height:"70px"}}/>
              <p style={{paddingLeft:"30px"}}>BUY PET TOY</p>x
          </div>
           
          </div>
          <div
            id="body"
            style={{
              height: "100%",
              overflowY: "scroll",
              margin: "20px ", 
              backgroundColor: "#fff",
              textAlign: "left",
              width:"70vw"
            }}
          >
            <div ref={adoptionRef} style={{ margin: "30px 0", padding: "20px", border: "1px solid black", height: "70vh",marginLeft:"40px"  }}>
              <h1 style={{ fontSize: "4em",paddingTop:"40px" }}>Want to adopt a pet</h1>
              <p style={{ width: "40vw", paddingTop: "20px" }}>
                Blah blah Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum sunt temporibus totam eveniet obcaecati asperiores? Aut
                deleniti consequatur cumque quos perspiciatis dolorem reiciendis
                libero a incidunt pariatur, reprehenderit voluptates ut?
              </p>
            </div>
            <div ref={reportRef} style={{ margin: "30px 0", padding: "25px", border: "1px solid black", height: "70vh", marginTop: "200px",marginLeft:"40px" }}>
              <h1 style={{ fontSize: "4em",paddingTop:"40px" }}>Want to report a pet</h1>
              <p style={{ width: "40vw", paddingTop: "20px" }}>
                Blah blah Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum sunt temporibus totam eveniet obcaecati asperiores? Aut
                deleniti consequatur cumque quos perspiciatis dolorem reiciendis
                libero a incidunt pariatur, reprehenderit voluptates ut?
              </p>
            </div>
            <div ref={foodRef} style={{ margin: "30px 0", padding: "25px", border: "1px solid black", height: "70vh", marginTop: "200px",marginLeft:"40px" }}>
              <h1 style={{ fontSize: "4em",paddingTop:"40px" }}>Want to buy pet food</h1>
              <p style={{ width: "40vw", paddingTop: "20px" }}>
                Blah blah Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum sunt temporibus totam eveniet obcaecati asperiores? Aut
                deleniti consequatur cumque quos perspiciatis dolorem reiciendis
                libero a incidunt pariatur, reprehenderit voluptates ut?
              </p>
            </div>
            <div ref={toyRef} style={{ margin: "30px 0", padding: "25px", border: "1px solid black", height: "70vh", marginTop: "200px",marginLeft:"40px" }}>
              <h1 style={{ fontSize: "4em",paddingTop:"40px" }}>Want to buy pet toy</h1>
              <p style={{ width: "40vw", paddingTop: "20px" }}>
                Blah blah Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum sunt temporibus totam eveniet obcaecati asperiores? Aut
                deleniti consequatur cumque quos perspiciatis dolorem reiciendis
                libero a incidunt pariatur, reprehenderit voluptates ut?
              </p>
            </div>
          </div>
        </section>
      </section>
      <section style={{ display: "flex", alignContent: "center",height:"100vh",alignItems:"center",margin:"50px" }}>
        <div style={{ margin:"50px",lineHeight:"1.5"}}>
          <p style={{ fontSize: "5em" }}>Work with us</p>
          <p style={{ fontSize: "1.3em" }}>Need help with one or all of the services above? Get in touch.</p>
          <div style={{ display: "flex", flexDirection: "column", width: "35vw", justifyContent: "space-evenly", gap: "20px",marginTop:"20px" }}>
            <input type="text" placeholder="State your name" required style={{ padding: "12px", fontSize: "1em", border: "1px solid black", borderRadius: "5px" }} />
            <input type="text" placeholder="State your email" required style={{ padding: "12px", fontSize: "1em", border: "1px solid black", borderRadius: "5px" }} />
            <textarea placeholder="State your business" required style={{ padding: "12px", fontSize: "1em", border: "1px solid black", borderRadius: "5px", height: "150px" }} />
            <input type="submit" name="" id="" style={{width:"10vw",padding:"15px",fontSize:"1em",borderRadius:"25px",border:"none",cursor:"pointer"}} />
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <Parallax className="image2" bgImage={black} strength={400} style={{zIndex:"2"}}>
            <div style={{ height: "100vh",width:"100vh" }}></div>
          </Parallax>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
