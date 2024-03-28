// Home.js
import React from "react";
import { Parallax } from "react-parallax";
import Navbar from "./Navbar";

import Pet from '../images/adopt2.webp';
import Pet2 from '../images/adopt1.webp';
import Adopt from '../images/adoptbackground.png';
import Petfood from '../images/foodbackground.png';
import Pettoys from '../images/toysbackground.png';
import Lostandfound from '../images/reportbackground.png'
import Typewriter from "./Typewriter";

function Home() {
  return (
    <>
      <Navbar />
      <Parallax>
        <Typewriter/>
      </Parallax>
      <Parallax className="image" bgImage={Adopt} strength={400}>
      <div className='content'>
        <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <h2 style={{ marginRight: '310px', fontSize: '2.5em', color: 'black' }}>Single? Adopt a Stalker (We Mean Snuggler!) </h2>
          <div style={{position:"relative", width: '1000px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ position: 'relative', width: '900px', height: '500px', overflow: 'hidden', boxShadow: '0 25px 35px rgba(0,0,0,0.1)' }}>
              <img src={Pet2} alt="" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} />
            </div>
            <div style={{ position: 'absolute', right: '-80px', marginTop: '400px', marginBottom: '100px', padding: '20px', background: 'white', zIndex: 1, maxWidth: '450px', color: 'black', boxShadow: '0 25px 35px rgba(0,0,0,0.1)', borderBottom: '6px solid #6504b5', borderRadius: '5px' }}>
              <p>
              Tired of boring shelters? We've got playful pups, cuddly kittens, and wise senior dogs - all desperate for a couch and someone to blame for hairballs. Adopt, don't shop - it's good for your heart and your Insta feed!
              </p>
              <div style={{ textAlign: "center" }}>
              <button
                style={{
                  width: "100px",
                  height: "100px",
                  padding: "10px",
                  fontSize: "1rem",
                  background: "#6504b5",
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
          </div>
        </section>
      </div>
    </Parallax>
    <Parallax className="image" bgImage={Petfood} strength={400}>
      <div className='content'>
        <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <h2 style={{ marginRight: '100px', fontSize: '2.5em', color: 'black' }}>Feed Your bottomless Pit (Don't Worry, We Have Food!)</h2>
          <div style={{position:"relative", width: '1000px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ position: 'relative', width: '900px', height: '500px', overflow: 'hidden', boxShadow: '0 25px 35px rgba(0,0,0,0.1)' }}>
              <img src={Pet} alt="" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} />
            </div>
            <div style={{ position: 'absolute', right: '-80px', marginTop: '400px', marginBottom: '100px', padding: '20px', background: 'white', zIndex: 1, maxWidth: '450px', color: 'black', boxShadow: '0 25px 35px rgba(0,0,0,0.1)', borderBottom: '6px solid #388E3C', borderRadius: '5px' }}>
              <p>
              We offer gourmet pet food that won't leave your wallet whimpering. From drool-worthy kibble to luscious wet food, we have everything to keep your fur baby happy and begging for more. Confused? Our staff speaks fluent "Woof" and "Meow."
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
          </div>
        </section>
      </div>
    </Parallax>
    <Parallax className="image" bgImage={Pettoys} strength={400}>
      <div className='content'>
        <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <h2 style={{ marginRight: '310px', fontSize: '2.5em', color: 'black' }}>Destroy This, Not Your Furniture (Epic Toys!) </h2>
          <div style={{position:"relative", width: '1000px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ position: 'relative', width: '900px', height: '500px', overflow: 'hidden', boxShadow: '0 25px 35px rgba(0,0,0,0.1)' }}>
              <img src={Pet} alt="" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} />
            </div>
            <div style={{ position: 'absolute', right: '-80px', marginTop: '400px', marginBottom: '100px', padding: '20px', background: 'white', zIndex: 1, maxWidth: '450px', color: 'black', boxShadow: '0 25px 35px rgba(0,0,0,0.1)', borderBottom: '6px solid #00008B', borderRadius: '5px' }}>
              <p>
              We have epic toys to keep your pet entertained for hours (or until they destroy the furniture). Balls for speed demons, puzzles for brainiacs, and plushie cuddlers for everyone! Bonus: our toys are built tough!
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
          </div>
        </section>
      </div>
    </Parallax>
    <Parallax className="image" bgImage={Lostandfound} strength={400}>
      <div className='content'>
        <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <h2 style={{ marginRight: '400px', fontSize: '2.5em', color: 'black' }}>Lost Your Escape Artist? We're Pet P.I.s!</h2>
          <div style={{position:"relative", width: '1000px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ position: 'relative', width: '900px', height: '500px', overflow: 'hidden', boxShadow: '0 25px 35px rgba(0,0,0,0.1)' }}>
              <img src={Pet} alt="" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} />
            </div>
            <div style={{ position: 'absolute', right: '-80px', marginTop: '400px', marginBottom: '100px', padding: '20px', background: 'white', zIndex: 1, maxWidth: '450px', color: 'black', boxShadow: '0 25px 35px rgba(0,0,0,0.1)', borderBottom: '6px solid crimson', borderRadius: '5px' }}>
              <p>
              Don't panic! Report your missing pet and our team of crack detectives (aka enthusiastic volunteers) will find your furball faster than a squirrel with a nut!
              </p>
              <div style={{ textAlign: "center" }}>
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
                }}
              >
                Report
              </button>
            </div>
            </div>
          </div>
        </section>
      </div>
    </Parallax>
      
    </>
  );
}

export default Home;
