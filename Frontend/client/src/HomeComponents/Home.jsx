// Home.js
import React from "react";
import { Parallax } from "react-parallax";
import {Link} from 'react-router-dom';
import Navbar from "./Navbar";
import Pet from '../images/adopt2.webp';
import Pet2 from '../images/adopt1.webp';
import Adopt from '../images/adoptbackground.png';
import Petfood from '../images/foodbackground.png';
import Pettoys from '../images/toysbackground.png';
import Lostandfound from '../images/reportbackground.png'
import Typewriter from "./Typewriter";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Parallax>
        <div style={{height:"90vh", display:"flex",justifyContent:"center", alignItems:"center", padding:"20px",backgroundImage: 'linear-gradient(to bottom right,aqua,lightblue,violet,purple)',border:"none" }}>
          <div style={{display:"flex",flexDirection:"column", textAlign:"start", padding:"30px", height:"50vh", width:"40vw", background:"white", borderRadius:"10px 0px 0px 10px"}}>
            <h1>Welcome to Fluffy.</h1>
            <Typewriter/>
            <div>

            <button
              style={{
                width: "90px",
                height: "90px",
                marginTop: "100px",
                padding: "10px",
                fontSize: "1rem",
                backgroundImage: "linear-gradient(to top right, red , hotpink)", 
                color: "white",
                borderRadius: "100%",
                border: "none",
                cursor: "pointer",
                fontFamily:"monospace"
              }}
            >
              Explore
            </button>

              <h6 style={{marginTop:"30px"}}>created by, Snegan.</h6>
            </div>
          </div>
          <div>
          <img src={Pet2} alt="" style={{height:"500px", width:"800px", borderRadius:"10px"}} />
          </div>
        </div>
      </Parallax>
      <Parallax className="image" bgImage={Adopt} strength={420}>
      <div className='content'>
        <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <h2 style={{ fontSize: '2.7em', color: '#6504b5', fontFamily:"monospace", width:"70vw",marginBottom:"20px", borderBottom:"5px dashed #6504b5"}}>Single? Adopt a Stalker (We Mean Snuggler!) </h2>
          
          <div style={{position:"relative", width: '1000px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ position: 'relative', width: '900px', height: '500px', overflow: 'hidden', boxShadow: '0 25px 35px rgba(0,0,0,0.1)' }}>
              <img src={Pet2} alt="" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} />
            </div>
            <div style={{ position: 'absolute', right: '-80px', marginTop: '400px', marginBottom: '100px', padding: '25px', background: 'white', zIndex: 1, maxWidth: '450px', color: 'black', boxShadow: '0 25px 35px rgba(0,0,0,0.1)', borderBottom: '6px solid #6504b5', borderRadius: '5px' }}>
              <p>
              Tired of boring shelters? We've got playful pups, cuddly kittens, and wise senior dogs - all desperate for a couch and someone to blame for hairballs. Adopt, don't shop - it's good for your heart and your Insta feed!
              </p>
              <div style={{ textAlign: "center" }}>
              <Link to="/adopt-a-pet" style={{ color: "white" }}>
                    <button
                    style={{
                      width: "100px",
                      height: "100px",
                      fontSize: "1rem",
                      background: "#6504b5",
                      color: "white",
                      borderRadius: "100%",
                      border: "none",
                      cursor: "pointer",
                      fontFamily:"monospace"
                    }}
                  >
                      Adopt Me
                  </button>
                </Link>
            </div>
            </div>
          </div>
        </section>
      </div>
    </Parallax>
    <Parallax className="image" bgImage={Petfood} strength={420}>
      <div className='content'>
        <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <h2 style={{fontSize: '2.7em', color: '#388E3C', fontFamily:"monospace", width:"70vw",marginBottom:"20px", borderBottom:"5px dashed #388E3C" }}>Feed Your bottomless Pit (Don't Worry, We Have Food!)</h2>
          <div style={{position:"relative", width: '1000px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ position: 'relative', width: '900px', height: '500px', overflow: 'hidden', boxShadow: '0 25px 35px rgba(0,0,0,0.1)' }}>
              <img src={Pet} alt="" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} />
            </div>
            <div style={{ position: 'absolute', right: '-80px', marginTop: '400px', marginBottom: '100px', padding: '25px', background: 'white', zIndex: 1, maxWidth: '450px', color: 'black', boxShadow: '0 25px 35px rgba(0,0,0,0.1)', borderBottom: '6px solid #388E3C', borderRadius: '5px' }}>
              <p>
              We offer gourmet pet food that won't leave your wallet whimpering. From drool-worthy kibble to luscious wet food, we have everything to keep your fur baby happy and begging for more. Confused? Our staff speaks fluent "Woof" and "Meow."
              </p>
              <div style={{ textAlign: "center" }}>
              <Link to="/pet-foods" style={{ color: "white" }}>
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
                  fontFamily:"monospace"
                }}
              >
                Explore
              </button>
              </Link>
            </div>
            </div>
          </div>
        </section>
      </div>
    </Parallax>
    <Parallax className="image" bgImage={Pettoys} strength={420}>
      <div className='content'>
        <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <h2 style={{fontSize: '2.7em', color: '#00008B', fontFamily:"monospace", width:"70vw",marginBottom:"20px", borderBottom:"5px dashed #00008B" }}>Destroy This, Not Your Furniture (Epic Toys!) </h2>
          <div style={{position:"relative", width: '1000px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ position: 'relative', width: '900px', height: '500px', overflow: 'hidden', boxShadow: '0 25px 35px rgba(0,0,0,0.1)' }}>
              <img src={Pet} alt="" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} />
            </div>
            <div style={{ position: 'absolute', right: '-80px', marginTop: '400px', marginBottom: '100px', padding: '25px', background: 'white', zIndex: 1, maxWidth: '450px', color: 'black', boxShadow: '0 25px 35px rgba(0,0,0,0.1)', borderBottom: '6px solid #00008B', borderRadius: '5px' }}>
              <p>
              We have epic toys to keep your pet entertained for hours (or until they destroy the furniture). Balls for speed demons, puzzles for brainiacs, and plushie cuddlers for everyone! Bonus: our toys are built tough!
              </p>
              <div style={{ textAlign: "center" }}>
              <Link to="/pet-toys" style={{ color: "white" }}>
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
                  fontFamily:"monospace"
                }}
              >
                Explore
              </button>
              </Link>
            </div>
            </div>   
          </div>
        </section>
      </div>
    </Parallax>
    <Parallax className="image" bgImage={Lostandfound} strength={420}>
      <div className='content'>
        <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
          <h2 style={{ fontSize: '2.7em', color: 'crimson', fontFamily:"monospace", width:"70vw",marginBottom:"20px", borderBottom:"5px dashed crimson" }}>Lost Your Escape Artist? We're Pet P.I.s!</h2>
          <div style={{position:"relative", width: '1000px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ position: 'relative', width: '900px', height: '500px', overflow: 'hidden', boxShadow: '0 25px 35px rgba(0,0,0,0.1)' }}>
              <img src={Pet} alt="" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} />
            </div>
            <div style={{ position: 'absolute', right: '-80px', marginTop: '400px', marginBottom: '100px', padding: '25px', background: 'white', zIndex: 1, maxWidth: '450px', color: 'black', boxShadow: '0 25px 35px rgba(0,0,0,0.1)', borderBottom: '6px solid crimson', borderRadius: '5px' }}>
              <p>
              Don't panic! Report your missing pet and our team of crack detectives (aka enthusiastic volunteers) will find your furball faster than a squirrel with a nut!
              </p>
              <div style={{ textAlign: "center" }}>
              <Link to="/lost-and-found" style={{ color: "white" }}>
              <button
                style={{
                  width: "100px",
                  height: "100px",
                  padding: "10px",
                  fontSize: "1rem",
                  background: "crimson",
                  color: "white",
                  borderRadius: "50%",
                  border: "none",
                  cursor: "pointer",
                  fontFamily:"monospace"
                }}
              >
                Report
              </button>
              </Link>
            </div>
            </div>
          </div>
        </section>
      </div>
    </Parallax>
    <Footer/>
    </>
  );
}

export default Home;
