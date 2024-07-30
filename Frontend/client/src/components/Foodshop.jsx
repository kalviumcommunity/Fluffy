import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../HomeComponents/Navbar";
import Footer from "../HomeComponents/Footer";
import { Parallax } from "react-parallax";
import main from "../images/petfood1.avif";

const Foodshop = () => {
  const [foods, setFoods] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [addingToCartId, setAddingToCartId] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:1001/main/petfoods")
      .then((result) => {
        setFoods(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const addToCart = (selectedProduct) => {
    setAddingToCartId(selectedProduct.id);

    const { productName, image, price } = selectedProduct;

    const cartItemData = {
      productname: productName,
      productimage: image,
      productprice: price,
    };

    axios
      .post("http://localhost:1001/main/addtocart", cartItemData)
      .then((response) => {
        console.log("Item added to cart:", response.data);
        setCartItems((prevItems) => [...prevItems, response.data]);
      })
      .catch((error) => {
        console.error("Error adding item to cart:", error);
      })
      .finally(() => {
        setAddingToCartId(null);
      });
  };

  const renderFoods = (animal, type) => {
    const filteredFoods = foods.filter(
      (food) =>
        food.animal.toLowerCase() === animal &&
        (type === "treat"
          ? food.type.toLowerCase() === `${animal} treat`
          : food.type.toLowerCase() === `${animal} food`)
    );

    return (
      <>
        {filteredFoods.slice(0, 2).map((food) => {
          const isAddingToCart = addingToCartId === food.id;

          return (
            <section
              key={food._id}
              style={{
                border: "1px solid gray",
                borderRadius: "10px",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  padding:"10px"
                }}
              >
                <img
                  src={food.image}
                  alt=""
                  style={{
                    height: "200px",
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
                <div style={{ padding: "5px", width: "35vw" }}>
                  <div
                    style={{
                      padding: "5px",
                      width: "25vw",
                      textAlign: "left",
                    }}
                  >
                    <strong
                      style={{
                        color: "gray",
                        textTransform: "capitalize",
                        fontSize: "0.9rem",
                      }}
                    >
                      {food.brand} | {food.age} | {food.type}
                    </strong>
                    <h4>{food.productName}</h4>
                  </div>
                  <hr style={{ margin: "10px 0" }} />
                  <p>
                    <strong style={{ fontSize: "1.3rem", padding: "10px" }}>
                      💲{food.price}
                    </strong>
                  </p>
                  <p style={{ padding: "10px" }}>
                    Rating: ⭐{food.rating.stars} | Reviews:{" "}
                    {food.rating.numberOfReviews}
                  </p>
                  <hr style={{ margin: "10px 0" }} />
                  <div style={{ padding: "10px", textAlign: "left" }}>
                    {cartItems.some(
                      (item) => item.productname === food.productName
                    ) ? (
                      <p style={{ color: "green" }}>Added to Cart</p>
                    ) : (
                      <button
                        style={{
                          background: "#388E3C",
                          color: "white",
                          padding: "10px 25px",
                          border: "none",
                          borderRadius: "5px",
                          cursor: "pointer",
                        }}
                        onClick={() => addToCart(food)}
                        disabled={isAddingToCart}
                      >
                        {isAddingToCart ? "Adding..." : "Add to Cart"}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </>
    );
  };

  return (
    <>
      <section style={{ margin: "80px 110px" }}>
        <h2
          style={{
            color: "#388E3C",
            textAlign: "right",
            padding: "10px",
            fontSize: "2em",
            borderBottom:"3px dotted #388E3C",

          }}
        >
          Explore Our Pet's Foods
        </h2>
        <div>
          <h1 style={{ textAlign: "left", padding: "20px ", color: "#388E3C", textDecoration:"underline",fontSize:"1.8em" }}>
            All Cat Foods
          </h1>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "20px",
              padding: "20px",
            }}
          >
            {renderFoods("cat", "food")}
          </div>
          <div style={{ textAlign: "center", padding: "5px" }}>
            {foods.filter(food => food.animal.toLowerCase() === "cat" && food.type.toLowerCase() === "cat food").length > 2 && (
              <Link
                to="/cat-food"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <button
                  style={{
                    background: "#388E3C",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    color: "white",
                  }}
                >
                  See More
                </button>
              </Link>
            )}
          </div>
        </div>
        <hr style={{margin:"15px 0"}}/>
        <div>
          <h1 style={{ textAlign: "left", padding: "15px", color: "#388E3C", textDecoration:"underline",fontSize:"1.8em"  }}>
            All Cat Treats
          </h1>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "20px",
              padding: "20px",
            }}
          >
            {renderFoods("cat", "treat")}
          </div>
          <div style={{ textAlign: "center", padding: "5px" }}>
            {foods.filter(food => food.animal.toLowerCase() === "cat" && food.type.toLowerCase() === "cat treat").length > 2 && (
              <Link
                to="/cat-treat"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <button
                  style={{
                    background: "#388E3C",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    color: "white",
                  }}
                >
                  See More
                </button>
              </Link>
            )}
          </div>
        </div>
        <hr style={{margin:"15px 0"}}/>
        <div>
          <h1 style={{ textAlign: "left", padding: "15px", color: "#388E3C", textDecoration:"underline",fontSize:"1.8em"  }}>
            All Dog Foods
          </h1>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "20px",
              padding: "20px",
            }}
          >
            {renderFoods("dog", "food")}
          </div>
          <div style={{ textAlign: "center", padding: "5px" }}>
            {foods.filter(food => food.animal.toLowerCase() === "dog" && food.type.toLowerCase() === "dog food").length > 2 && (
              <Link
                to="/dog-food"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <button
                  style={{
                    background: "#388E3C",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    color: "white",
                  }}
                >
                  See More
                </button>
              </Link>
            )}
          </div>
        </div>
        <hr style={{margin:"15px 0"}}/>
        <div>
          <h1 style={{ textAlign: "left", padding: "15px", color: "#388E3C", textDecoration:"underline",fontSize:"1.8em" }}>
            All Dog Treats
          </h1>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "20px",
              padding: "20px",
            }}
          >
            {renderFoods("dog", "treat")}
          </div>
          <div style={{ textAlign: "center", padding: "5px" }}>
            {foods.filter(food => food.animal.toLowerCase() === "dog" && food.type.toLowerCase() === "dog treat").length > 2 && (
              <Link
                to="/dog-treat"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <button
                  style={{
                    background: "#388E3C",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    color: "white",
                  }}
                >
                  See More
                </button>
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Foodshop;
