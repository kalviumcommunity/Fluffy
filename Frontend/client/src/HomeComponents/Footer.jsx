import React from "react";
import { Link } from "react-router-dom"; // If you're using React Router for navigation

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#f8f9fa",
        padding: "60px",
        textAlign: "center",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        borderTop:"2px dashed black",
      }}
    >
      <div style={{ marginBottom: "40px" }}>
        <img
          src="https://cdn-icons-png.flaticon.com/128/2809/2809922.png"
          alt="Fluffy Logo"
          style={{
            height: "17vh",
            marginBottom: "0px",
            objectFit: "contain",
          }}
        />

        <p
          style={{
            color: "black",
            fontSize: "1.7em",
            fontWeight: "bold",
            marginBottom: "20px"
          }}
        >
          Fluffy
        </p>

        <p
          style={{
            color: "gray",
            fontSize: "2em",
            // fontWeight: "bold",
          }}
        >
          Connecting pets with loving homes
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "75vw",
          margin: "0 auto",
          alignContent:"center"
        }}
      >
        <div style={{ flex: "1", lineHeight: "1.6",textAlign:"start" }}>
          <h3>Explore</h3>
          <div style={{ display: "flex", flexDirection: "column",paddingTop:"10px" }}>
            <Link
              to="/adopt-a-pet"
              style={{ color: "purple", textDecoration: "none",  }}
            >
              Adopt a Pet
            </Link>
            <Link
              to="/lost-and-found"
              style={{ color: "crimson", textDecoration: "none",  }}
            >
              Report Lost Pet
            </Link>
            <Link
              to="/pet-foods"
              style={{ color: "green", textDecoration: "none",  }}
            >
              Buy Pet foods
            </Link>
            <Link
              to="/pet-toys"
              style={{ color: "blue", textDecoration: "none",  }}
            >
              Buy Pet Toys
            </Link>
          </div>
        </div>
        <div style={{ flex: "1", lineHeight: "1.6" }}>
          <h3>About Fluffy</h3>
          <p
            style={{
              color: "#343a40",
              fontSize: "1em",
              lineHeight: "1.6",
              width:"40vw",
              paddingTop:"10px"
            }}
          >
            Fluffy is your one-stop destination for all things pets. We're
            passionate about helping pets find forever homes and providing
            top-quality products for your furry friends.
          </p>
        </div>
        <div style={{ flex: "1", lineHeight: "1.6",textAlign:"end" }}>
          <h3>Connect</h3>
          <div style={{ display: "flex", flexDirection: "column",paddingTop:"10px" }}>
            <a
              href="https://facebook.com/fluffy-pets"
              style={{ color: "#343a40", textDecoration: "none",  }}
            >
              Facebook
            </a>
            <a
              href="https://twitter.com/fluffy-pets"
              style={{ color: "#343a40", textDecoration: "none",  }}
            >
              Twitter
            </a>
            <a
              href="https://instagram.com/fluffy-pets"
              style={{ color: "#343a40", textDecoration: "none",  }}
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: "40px",
          borderTop: "1px solid #dee2e6",
          paddingTop: "20px",
          color: "#868e96",
          fontSize: "14px",
        }}
      >
        <p>&copy; {new Date().getFullYear()} Fluffy. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
