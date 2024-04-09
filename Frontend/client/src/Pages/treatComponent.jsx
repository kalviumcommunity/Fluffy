import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
import Navbar from '../HomeComponents/Navbar';

function treatComponent() {
    const [foods, setFoods] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("puppy");

  useEffect(() => {
    axios
      .get("http://localhost:1001/main/petfoods")
      .then((result) => {
        setFoods(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredFoods = selectedCategory
    ? foods.filter((food) => food.age === selectedCategory && food.type === "dog treat")
    : foods.filter((food) => food.type === "dog treat");

  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center", padding: "15px", color: "#388E3C" }}>
        All Dog foods
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
              color: selectedCategory === "puppy" ? "red" : "#388E3C",
            }}
            onClick={() => handleCategoryClick("puppy")}
          >
            Puppy
          </p>
          <p
            style={{
              borderRight: "1px solid black",
              padding: "5px",
              cursor: "pointer",
              color: selectedCategory === "adult" ? "red" : "#388E3C",
            }}
            onClick={() => handleCategoryClick("adult")}
          >
            Adult
          </p>
          <p
            style={{
              borderRight: "1px solid black",
              padding: "5px",
              cursor: "pointer",
              color: selectedCategory === "senior" ? "red" : "#388E3C",
            }}
            onClick={() => handleCategoryClick("senior")}
          >
            Senior
          </p>
        </strong>
      </div>
      {filteredFoods.map((food, index) => (
        <section key={index} style={{ margin: "30px 365px " }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={food.image} alt="" style={{ height: "300px" }} />
            <div>
              <strong
                style={{
                  color: "gray",
                  textTransform: "capitalize",
                  fontSize: "0.8rem",
                }}
              >
                {food.brand} | {food.age}
              </strong>
              <h5>{food.productName}</h5>
              <hr />
              <p>
                <strong style={{ fontSize: "1.3rem" }}>💲{food.price}</strong>
              </p>
              <p>
                Rating : ⭐{food.rating.stars} | Reviews :{" "}
                {food.rating.numberOfReviews}
              </p>
              <hr />
              <div>
                <button
                  style={{
                    background: "#388E3C",
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
                    color: "#388E3C",
                    padding: "5px 10px",
                    border: "1px solid #388E3C",
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
          to="/pet-foods"
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


export default treatComponent