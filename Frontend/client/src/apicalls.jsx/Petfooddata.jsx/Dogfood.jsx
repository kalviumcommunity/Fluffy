import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../../HomeComponents/Navbar";

function Dogfood() {
  const [foods, setFoods] = useState([]);
  const [selectedType, setSelectedType] = useState("dog food");
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
    if (category === "dog food" || category === "dog treat") {
      setSelectedType(category);
    } else {
      setSelectedCategory(category);
    }
  };
  
  const filteredFoods = foods.filter((food) => {
    const isCorrectType = food.type === selectedType && food.animal === "dog";
    const isCorrectCategory = selectedCategory ? food.age === selectedCategory : true;
    return isCorrectType && isCorrectCategory;
  });
  
  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center", padding: "15px", color: "#388E3C" }}>
        All Dog Foods and Treats
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
              color: selectedType === "dog food" ? "red" : "#388E3C",
            }}
            onClick={() => handleCategoryClick("dog food")}
          >
            Dog Food
          </p>
          <p
            style={{
              borderLeft: "1px solid black",
              padding: "5px",
              cursor: "pointer",
              color: selectedType === "dog treat" ? "red" : "#388E3C",
            }}
            onClick={() => handleCategoryClick("dog treat")}
          >
            Dog Treat
          </p>
        </strong>
      </div>
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
            Puppies
          </p>
          <p
            style={{
              borderRight: "1px solid black",
              padding: "5px",
              cursor: "pointer",
              color: selectedCategory === "adult dog" ? "red" : "#388E3C",
            }}
            onClick={() => handleCategoryClick("adult dog")}
          >
            Adult
          </p>
          <p
            style={{
              borderRight: "1px solid black",
              padding: "5px",
              cursor: "pointer",
              color: selectedCategory === "senior dog" ? "red" : "#388E3C",
            }}
            onClick={() => handleCategoryClick("senior dog")}
          >
            Senior
          </p>
        </strong>
      </div>
      {filteredFoods.map((food, index) => (
        <section key={index} style={{ margin: "30px 370px " }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={food.image} alt="" style={{ height: "300px" }} />
            <div style={{ padding: "15px" }}>
              <strong
                style={{
                  color: "gray",
                  textTransform: "capitalize",
                  fontSize: "0.8rem",
                }}
              >
                {food.brand} | {food.age} | {food.type}
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
          display:"flex",
          justifyContent:"space-between",
        //   alignItems:"center"
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
        <Link
          to="/cat-foods"
          style={{ textDecoration: "none", color: "#388E3C" }}
        >
          <p>
            <strong>Cat food and treats &gt;&gt;</strong>
          </p>
        </Link>
      </section>
    </div>
  );
}

export default Dogfood;
