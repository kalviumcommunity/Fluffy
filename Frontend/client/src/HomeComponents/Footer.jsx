import React from "react";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer style={{background:"black", color:"#E0E0E0"}}>
        <div style={{
          height:"90vh",
          display:"flex",
          flexDirection:"column",
          justifyContent:"space-between",
          borderTop:"2px solid gray",
          padding:"75px",
        }}>
          <div
          style={{
            display:"flex",
            justifyContent:"space-between",
          }} 
          >
            <div style={{ marginBottom: "10px" }}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/2809/2809922.png"
                alt="Fluffy Logo"
                style={{
                  height: "100px",
                  objectFit: "contain",
                }}
              />
              <p
                style={{
                  fontSize: "8em",
                  fontWeight: "bold",
                }}
              >
                Fluffy
              </p>
              <p style={{ color: "gray", fontSize: "1.2em" }}>
                Connecting pets with loving homes
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                width:"45vw",
                lineHeight:"1.7"
              }}
            >
              <div style={{textAlign: "start", margin: "0 10px",fontWeight:"bold" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p>About</p>
                  <p>Services</p>
                  <p>Work</p>
                  <p>Ideas</p>
                  <p>Connect</p>
                </div>
              </div>
              <div style={{ textAlign: "start", margin: "0 10px",fontWeight:"bold" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p>Why Us</p>
                  <p>Work with Us</p>
                  <p>Privacy</p>
                </div>
              </div>
              <div style={{ textAlign: "start", margin: "0 10px",fontWeight:"bold",width:"160px" }}>
                <div style={{ display: "flex", flexDirection: "row",justifyContent:"space-between", }}>
                  <img src="https://cdn-icons-png.flaticon.com/128/15047/15047435.png" alt="" style={{height:"35px"}} />
                  <img src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png" alt="" style={{height:"35px"}}/>
                  <img src="https://cdn-icons-png.flaticon.com/128/145/145807.png" alt="" style={{height:"35px"}}/>
                  <img src="https://cdn-icons-png.flaticon.com/128/3670/3670151.png" alt="" style={{height:"35px"}}/>
                </div>
              </div>
            </div>
          </div>
            <section
            style={{
              display:"flex",
              justifyContent:"space-between",
              borderTop: "1px solid #dee2e6",
              paddingTop:"10px"
            }}
            >
            <div
              style={{
                color: "#868e96",
                fontSize: "14px",
              }}
            >
              <p>&copy; {new Date().getFullYear()} Fluffy. All rights reserved.</p>
            </div>
            <div
            style={{
              color: "#868e96",
              fontSize: "14px",
            }} 
            >
              <p>Website by <strong style={{textDecoration:"underline",color:"white"}}>Snegan</strong></p>
            </div>
            </section>
        </div>
    </footer>
  );
}

export default Footer;
