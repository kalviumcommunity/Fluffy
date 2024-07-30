import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../../HomeComponents/Navbar";
import Footer from "../../HomeComponents/Footer";

function Catfood() {
  const [foods, setFoods] = useState([]);
  const [selectedType, setSelectedType] = useState("cat food");
  const [selectedCategory, setSelectedCategory] = useState("kitten");
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

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

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

  // Filter foods based on selected type and category
  const filteredFoods = foods.filter((food) => {
    return (
      food.type.toLowerCase() === selectedType.toLowerCase() &&
      food.age.toLowerCase() === selectedCategory.toLowerCase() &&
      food.animal.toLowerCase() === "cat"
    );
  });

  return (
    <>
      <Navbar />
      <h1 style={{ textAlign: "center", padding: "15px", color: "#388E3C" }}>
        All Cat Foods
      </h1>
      <div>
        <strong style={{ display: "flex", justifyContent: "space-around", alignItems: "center", padding: "10px 0", backgroundColor: "#388E3C" }}>
          <p
            style={{
              padding: "10px 50px",
              cursor: "pointer",
              backgroundColor: selectedCategory === "kitten" ? "white" : "#388E3C",
              color: selectedCategory === "kitten" ? "red" : "white",
              transition: "background-color 0.3s ease, color 0.3s ease",
            }}
            onClick={() => handleCategoryClick("kitten")}
          >
            Kitten
          </p>
          <p
            style={{
              padding: "10px 50px",
              cursor: "pointer",
              backgroundColor: selectedCategory === "adult cat" ? "white" : "#388E3C",
              color: selectedCategory === "adult cat" ? "red" : "white",
              transition: "background-color 0.3s ease, color 0.3s ease",
            }}
            onClick={() => handleCategoryClick("adult cat")}
          >
            Adult Cat
          </p>
          <p
            style={{
              padding: "10px 50px",
              cursor: "pointer",
              backgroundColor: selectedCategory === "senior cat" ? "white" : "#388E3C",
              color: selectedCategory === "senior cat" ? "red" : "white",
              transition: "background-color 0.3s ease, color 0.3s ease",
            }}
            onClick={() => handleCategoryClick("senior cat")}
          >
            Senior Cat
          </p>
        </strong>
      </div>
      {filteredFoods.map((food) => {
        const isAddingToCart = addingToCartId === food.id;

        return (
          <section key={food._id} style={{ margin: "30px 350px " }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center",border:"1px solid gray",padding:"20px",borderRadius:"15px" }}>
              <img src={food.image} alt="" style={{ height: "300px", width: "250px", objectFit: "cover" }} />
              <div style={{ padding: "20px", width: "100%" }}>
                <div style={{ padding: "10px", width: "100%" }}>
                  <strong style={{ color: "gray", textTransform: "capitalize", fontSize: "0.9rem" }}>{food.brand} | {food.age} | {food.type}</strong>
                  <h3>{food.productName}</h3>
                </div>
                <hr style={{ margin: "10px 0" }} />
                <p><strong style={{ fontSize: "1.3rem", padding: "10px" }}>💲{food.price}</strong></p>
                <p style={{ padding: "10px" }}>Rating : ⭐{food.rating.stars} | Reviews : {food.rating.numberOfReviews}</p>
                <hr style={{ margin: "10px 0" }} />
                <div style={{ padding: "10px" }}>
                  {cartItems.some((item) => item.productname === food.productName) ? (
                    <p style={{ color: "green" }}>Added to Cart</p>
                  ) : (
                    <button
                      style={{ background: "#388E3C", color: "white", padding: "10px 25px", border: "none", borderRadius: "5px", marginRight: "20px", cursor: "pointer" }}
                      onClick={() => addToCart(food)}
                      disabled={isAddingToCart}
                    >
                      {isAddingToCart ? 'Adding...' : 'Add to Cart'}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}
      <section style={{ position: "sticky", bottom: "0", borderTop: "1px solid gray", padding: "7px 250px", background: "white", height: "40px", display: "flex", justifyContent: "space-between" }}>
        <Link to="/pet-foods" style={{ textDecoration: "none", color: "#388E3C" }}>
          <p><strong>&lt;&lt; Back</strong></p>
        </Link>
        <Link to="/dog-food" style={{ textDecoration: "none", color: "#388E3C" }}>
          <p><strong>Dog foods &gt;&gt;</strong></p>
        </Link>
      </section>
    </>
  );
}

export default Catfood;
