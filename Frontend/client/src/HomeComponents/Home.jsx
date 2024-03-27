// Home.js
import React from "react";
import { Parallax } from "react-parallax";
import Navbar from "./Navbar";

import Pet from '../images/adopt2.webp'
import Pet2 from '../images/adopt1.webp'

function Home() {
  return (
    <>
      <Navbar />
      <Parallax className="image" bgImage={Pet} strength={800}>
      <div className='content'>
        <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <h2 style={{ marginLeft: '250px', fontSize: '4em', color: '#fff' }}>Awesome Parallax Scrolling</h2>
          <div style={{position:"relative", width: '1000px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ position: 'relative', width: '900px', height: '500px', overflow: 'hidden', boxShadow: '0 25px 35px rgba(0,0,0,0.1)' }}>
              <img src={Pet2} alt="" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} />
            </div>
            <div style={{ position: 'absolute', right: '-80px', marginTop: '400px', marginBottom: '100px', padding: '30px', background: '#333', zIndex: 1, maxWidth: '500px', color: 'white', boxShadow: '0 25px 35px rgba(0,0,0,0.1)', borderBottom: '6px solid #4ac7ff', borderRadius: '10px' }}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, numquam error suscipit tempora hic aut,
                excepturi expedita libero eaque rem quam fugiat saepe
                aliquid illum inventore voluptate fugit eos eveniet! Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Culpa
                eius at unde, non doloremque corrupti ut veniam ipsa
                tempora excepturi voluptates provident harum asperiores
                vero dolores placeat vitae distinctio illum?
              </p>
            </div>
          </div>
        </section>
      </div>
    </Parallax>
    <Parallax className="image" bgImage={Pet2} strength={800}>
      <div className='content'>
        <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <h2 style={{ marginLeft: '250px', fontSize: '4em', color: '#fff' }}>Awesome Parallax Scrolling</h2>
          <div style={{position:"relative", width: '1000px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ position: 'relative', width: '900px', height: '500px', overflow: 'hidden', boxShadow: '0 25px 35px rgba(0,0,0,0.1)' }}>
              <img src={Pet} alt="" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} />
            </div>
            <div style={{ position: 'absolute', right: '-80px', marginTop: '400px', marginBottom: '100px', padding: '30px', background: '#333', zIndex: 1, maxWidth: '500px', color: 'white', boxShadow: '0 25px 35px rgba(0,0,0,0.1)', borderBottom: '6px solid #4ac7ff', borderRadius: '10px' }}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, numquam error suscipit tempora hic aut,
                excepturi expedita libero eaque rem quam fugiat saepe
                aliquid illum inventore voluptate fugit eos eveniet! Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Culpa
                eius at unde, non doloremque corrupti ut veniam ipsa
                tempora excepturi voluptates provident harum asperiores
                vero dolores placeat vitae distinctio illum?
              </p>
            </div>
          </div>
        </section>
      </div>
    </Parallax>
      
    </>
  );
}

export default Home;
