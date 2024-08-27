import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../HomeComponents/Navbar";
import Footer from "../HomeComponents/Footer";

const Toyshop = () => {
  const [toys, setToys] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [addingToCartId, setAddingToCartId] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:1001/main/pettoys")
      .then((result) => {
        setToys(result.data);
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

  const renderToys = (animal) => {
    const filteredToys = toys.filter(
      (toy) => toy.animal.toLowerCase() === animal
    );

    return (
      <>
        {filteredToys.slice(0, 2).map((toy) => {
          const isAddingToCart = addingToCartId === toy.id;

          return (
            <section
              key={toy._id}
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
                  padding: "25````px",
                }}
              >
                <img
                  src={toy.image}
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
                      {toy.brand} | {toy.type}
                    </strong>
                    <h4>{toy.productName}</h4>
                  </div>
                  <hr style={{ margin: "10px 0" }} />
                  <p>
                    <strong style={{ fontSize: "1.3rem", padding: "10px" }}>
                      💲{toy.price}
                    </strong>
                  </p>
                  <p style={{ padding: "10px" }}>
                    Rating: ⭐{toy.rating.stars} | Reviews:{" "}
                    {toy.rating.noOfReviews}
                  </p>
                  <hr style={{ margin: "10px 0" }} />
                  <div style={{ padding: "10px", textAlign: "left" }}>
                    {cartItems.some(
                      (item) => item.productname === toy.productName
                    ) ? (
                      <p style={{ color: "#27408B" }}>Added to Cart</p>
                    ) : (
                      <button
                        style={{
                          background: "#27408B",
                          color: "white",
                          padding: "10px 25px",
                          border: "none",
                          borderRadius: "5px",
                          cursor: "pointer",
                        }}
                        onClick={() => addToCart(toy)}
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
            color: "#00008B",
            textAlign: "right",
            paddingBottom: "10px",
            fontSize: "2.5em",
            borderBottom:"3px dotted #27408B"
          }}
        >
          Explore Our Pet's Toys
        </h2>
        <div>
          <h1 style={{ textAlign: "left",margin:"25px", color: "#00008B",fontSize:"1.8em",textDecoration:"underline" }}>
            All Cat Toys
          </h1>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "20px",
              padding: "20px",

            }}
          >
            {renderToys("cat")}
          </div>
          <div style={{ textAlign: "center", padding: "10px" }}>
            {toys.filter(
              (toy) => toy.animal.toLowerCase() === "cat"
            ).length > 2 && (
              <Link
                to="/cat-toy"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <button
                  style={{
                    background: "#27408B",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    color: "white",
                  }}
                >
                  See More...
                </button>
              </Link>
            )}
          </div>
        </div>
        <hr style={{margin:"40px 0"}}/>
        <div>
          <h1 style={{ textAlign: "left", margin:"25px", color: "#00008B",fontSize:"1.8em",textDecoration:"underline" }}>
            All Dog Toys
          </h1>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "20px",
              padding: "20px",
            }}
          >
            {renderToys("dog")}
          </div>
          <div style={{ textAlign: "center", padding: "5px" }}>
            {toys.filter(
              (toy) => toy.animal.toLowerCase() === "dog"
            ).length > 2 && (
              <Link
                to="/dog-toy"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <button
                  style={{
                    background: "#27408B",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    color: "white",
                  }}
                >
                  See More...
                </button>
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Toyshop;
