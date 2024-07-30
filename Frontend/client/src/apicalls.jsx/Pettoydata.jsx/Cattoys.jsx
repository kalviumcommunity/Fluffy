import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../../HomeComponents/Navbar";

function Cattoys() {
  const [toys, setToys] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Feather Toy");

  useEffect(() => {
    axios
      .get("http://localhost:1001/main/pettoys")
      .then((result) => {
        setToys(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredToys = selectedCategory
    ? toys.filter((toy) => toy.type === selectedCategory && toy.animal === "cat")
    : toys.filter((toy) => toy.animal === "cat");

  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center", padding: "15px", color: "#27408B", fontSize: "3em" }}>
        All Cat Toys
      </h1>
      <div>
        <strong
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "10px 0",
            backgroundColor: "#27408B"
          }}
        >
          <p
            style={{
              padding: "10px 50px",
              cursor: "pointer",
              backgroundColor: selectedCategory === "Feather Toy" ? "white" : "#27408B",
              color: selectedCategory === "Feather Toy" ? "red" : "white",
              transition: "background-color 0.3s ease, color 0.3s ease",
              margin: "0 5px",
            }}
            onClick={() => handleCategoryClick("Feather Toy")}
          >
            Feather Toys
          </p>
          <p
            style={{
              padding: "10px 50px",
              cursor: "pointer",
              backgroundColor: selectedCategory === "Interactive Toy" ? "white" : "#27408B",
              color: selectedCategory === "Interactive Toy" ? "red" : "white",
              transition: "background-color 0.3s ease, color 0.3s ease",
              margin: "0 5px",
            }}
            onClick={() => handleCategoryClick("Interactive Toy")}
          >
            Interactive Toys
          </p>
          <p
            style={{
              padding: "10px 50px",
              cursor: "pointer",
              backgroundColor: selectedCategory === "Catnip Toy" ? "white" : "#27408B",
              color: selectedCategory === "Catnip Toy" ? "red" : "white",
              transition: "background-color 0.3s ease, color 0.3s ease",
              margin: "0 5px",
            }}
            onClick={() => handleCategoryClick("Catnip Toy")}
          >
            Catnip Toys
          </p>
          <p
            style={{
              padding: "10px 50px",
              cursor: "pointer",
              backgroundColor: selectedCategory === "Scratch Post" ? "white" : "#27408B",
              color: selectedCategory === "Scratch Post" ? "red" : "white",
              transition: "background-color 0.3s ease, color 0.3s ease",
              margin: "0 5px",
            }}
            onClick={() => handleCategoryClick("Scratch Post")}
          >
            Scratch Posts
          </p>
        </strong>
      </div>

      {filteredToys.map((toy, index) => (
        <section key={index} style={{ margin: "30px 350px", border: "1px solid gray", padding: "20px", borderRadius: "15px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <img src={toy.image} alt="" style={{ height: "300px", width: "250px", objectFit: "cover" }} />
            <div style={{ padding: "20px", width: "100%" }}>
              <div style={{ padding: "10px", width: "100%" }}>
                <strong style={{ color: "gray", textTransform: "capitalize", fontSize: "0.9rem" }}>
                  {toy.brand} | {toy.type}
                </strong>
                <h3>{toy.productName}</h3>
              </div>
              <hr style={{ margin: "10px 0" }} />
              <p>
                <strong style={{ fontSize: "1.3rem", padding: "10px" }}>💲{toy.price}</strong>
              </p>
              <p style={{ padding: "10px" }}>
                Rating : ⭐{toy.rating.stars} | Reviews : {toy.rating.numberOfReviews}
              </p>
              <hr style={{ margin: "10px 0" }} />
              <div style={{ padding: "10px" }}>
                <button
                  style={{
                    background: "#27408B",
                    color: "white",
                    padding: "10px 25px",
                    border: "none",
                    borderRadius: "5px",
                    marginRight: "20px",
                    cursor: "pointer",
                  }}
                >
                  Buy Now
                </button>
                <button
                  style={{
                    background: "white",
                    color: "#27408B",
                    padding: "5px 10px",
                    border: "1px solid #27408B",
                    borderRadius: "5px",
                    marginRight: "20px",
                    cursor: "pointer",
                  }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </section>
      ))}
      <section
        style={{
          position: "sticky",
          bottom: "0",
          borderTop: "1px solid gray",
          padding: "7px 250px",
          background: "white",
          height: "40px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link to="/pet-toys" style={{ textDecoration: "none", color: "#00008B" }}>
          <p><strong>&lt;&lt; Back</strong></p>
        </Link>
        <Link to="/dog-toys" style={{ textDecoration: "none", color: "#00008B" }}>
          <p><strong>Dog toys &gt;&gt;</strong></p>
        </Link>
      </section>
    </div>
  );
}

export default Cattoys;
