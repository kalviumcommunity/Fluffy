import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../../HomeComponents/Navbar";

function Dogtoys() {
  const [toys, setToys] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Chew Toy");

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
    ? toys.filter((toy) => toy.type === selectedCategory && toy.animal === "dog")
    : toys.filter((toy) => toy.animal === "dog");

  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center", padding: "15px", color: "#00008B" }}>
        All Dog Toys
      </h1>
      <div>
        <strong
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            paddingTop: "10px",
            border: "1px solid black",
          }}
        >
          <p
            style={{
              borderRight: "1px solid black",
              padding: "5px",
              cursor: "pointer",
              color: selectedCategory === "Chew Toy" ? "red" : "#00008B",
            }}
            onClick={() => handleCategoryClick("Chew Toy")}
          >
            Chew Toys
          </p>
          <p
            style={{
              borderRight: "1px solid black",
              padding: "5px",
              cursor: "pointer",
              color: selectedCategory === "Interactive Toy" ? "red" : "#00008B",
            }}
            onClick={() => handleCategoryClick("Interactive Toy" )}
          >
            Interactive Toys
          </p>
          <p
            style={{
              borderRight: "1px solid black",
              padding: "5px",
              cursor: "pointer",
              color: selectedCategory === "Plush Toy" ? "red" : "#00008B",
            }}
            onClick={() => handleCategoryClick("Plush Toy")}
          >
            Plush Toys
          </p>
          <p
            style={{
              borderRight: "1px solid black",
              padding: "5px",
              cursor: "pointer",
              color: selectedCategory === "Fetch Toy" ? "red" : "#00008B",
            }}
            onClick={() => handleCategoryClick("Fetch Toy")}
          >
            Fetch Toys
          </p>
        </strong>
      </div>

      {filteredToys.map((toy, index) => (
        <section key={index} style={{ margin: "30px 360px " }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={toy.image} alt="" style={{ height: "300px" }} />
            <div style={{padding:"15px"}}>
              <strong
                style={{
                  color: "gray",
                  textTransform: "capitalize",
                  fontSize: "0.8rem",
                }}
              >
                {toy.brand} | {toy.type}
              </strong>
              <h5>{toy.productName}</h5>
              <hr />
              <p>
                <strong style={{ fontSize: "1.3rem" }}>💲{toy.price}</strong>
              </p>
              <p>
                Rating : ⭐{toy.rating.stars} | Reviews :{" "}
                {toy.rating.numberOfReviews}
              </p>
              <hr />
              <div>
                <button
                  style={{
                    background: "#00008B",
                    color: "white",
                    padding: "10px 15px",
                    border: "none",
                    borderRadius: "5px",
                    marginRight: "20px",
                  }}
                >
                  Buy Now
                </button>
                <button
                  style={{
                    background: "white",
                    color: "#00008B",
                    padding: "5px 10px",
                    border: "1px solid #00008B",
                    borderRadius: "5px",
                    marginRight: "20px",
                  }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <hr />
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
        }}
      >
        <Link
          to="/pet-toys"
          style={{ textDecoration: "none", color: "#388E3C" }}
        >
          <p>
            <strong>&lt;&lt; Back</strong>
          </p>
        </Link>
      </section>
    </div>
  );
}

export default Dogtoys;
