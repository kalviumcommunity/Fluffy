import React from "react";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import black from '../images/black.jpg';

function Footer() {
  return (
    <footer style={{background:"black", color:"white",marginTop:"100px"}}>
        <div style={{
          height:"90vh",
          display:"flex",
          flexDirection:"column",
          justifyContent:"space-between",
          borderTop:"2px solid gray",
          padding:"100px",
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
                justifyContent: "space-around",
                width:"50vw",
                lineHeight:"1.7"
              }}
            >
              <div style={{ textAlign: "start", margin: "0 10px" }}>
                <div style={{ display: "flex", flexDirection: "column", paddingTop: "10px",fontWeight:"bold" }}>
                  <Link
                    to="/adopt-a-pet"
                    style={{ color: "#6f42c1", textDecoration: "none", }}
                  >
                    Adopt a Pet
                  </Link>
                  <Link
                    to="/lost-and-found"
                    style={{ color: "#dc3545", textDecoration: "none", }}
                  >
                    Report Lost Pet
                  </Link>
                  <Link
                    to="/pet-foods"
                    style={{ color: "#28a745", textDecoration: "none",  }}
                  >
                    Buy Pet Foods
                  </Link>
                  <Link
                    to="/pet-toys"
                    style={{ color: "#007bff", textDecoration: "none", }}
                  >
                    Buy Pet Toys
                  </Link>
                </div>
              </div>
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
              <div style={{ textAlign: "start", margin: "0 10px",fontWeight:"bold" }}>
                <div style={{ display: "flex", flexDirection: "row",justifyContent:"space-between", }}>
                  <img src="https://cdn-icons-png.flaticon.com/128/15047/15047435.png" alt="" style={{height:"40px"}} />
                  <img src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png" alt="" style={{height:"40px"}}/>
                  <img src="https://cdn-icons-png.flaticon.com/128/145/145807.png" alt="" style={{height:"40px"}}/>
                  <img src="https://cdn-icons-png.flaticon.com/128/3670/3670151.png" alt="" style={{height:"40px"}}/>
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
              <p>Website by <strong style={{textDecoration:"underline",}}>Snegan</strong></p>
            </div>
            </section>
        </div>
    </footer>
  );
}

export default Footer;
