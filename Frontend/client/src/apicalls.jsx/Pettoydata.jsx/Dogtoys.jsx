import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../../HomeComponents/Navbar";

function Dogtoys() {
  const [toys, setToys] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Chew Toy");
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

  const filteredToys = selectedCategory
    ? toys.filter((toy) => toy.type === selectedCategory && toy.animal === "dog")
    : toys.filter((toy) => toy.animal === "dog");

  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center", padding: "15px", color: "#27408B", fontSize: "3em" }}>
        All Dog Toys
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
              backgroundColor: selectedCategory === "Chew Toy" ? "white" : "#27408B",
              color: selectedCategory === "Chew Toy" ? "red" : "white",
              transition: "background-color 0.3s ease, color 0.3s ease",
              margin: "0 5px",
            }}
            onClick={() => handleCategoryClick("Chew Toy")}
          >
            Chew Toys
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
              backgroundColor: selectedCategory === "Plush Toy" ? "white" : "#27408B",
              color: selectedCategory === "Plush Toy" ? "red" : "white",
              transition: "background-color 0.3s ease, color 0.3s ease",
              margin: "0 5px",
            }}
            onClick={() => handleCategoryClick("Plush Toy")}
          >
            Plush Toys
          </p>
          <p
            style={{
              padding: "10px 50px",
              cursor: "pointer",
              backgroundColor: selectedCategory === "Fetch Toy" ? "white" : "#27408B",
              color: selectedCategory === "Fetch Toy" ? "red" : "white",
              transition: "background-color 0.3s ease, color 0.3s ease",
              margin: "0 5px",
            }}
            onClick={() => handleCategoryClick("Fetch Toy")}
          >
            Fetch Toys
          </p>
        </strong>
      </div>

      {filteredToys.map((toy) => {
        const isAddingToCart = addingToCartId === toy.id;

        return (
          <section key={toy._id} style={{ margin: "30px 350px", border: "1px solid gray", padding: "20px", borderRadius: "15px" }}>
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
                  {cartItems.some((item) => item.productname === toy.productName) ? (
                    <p style={{ color: "green" }}>Added to Cart</p>
                  ) : (
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
                      onClick={() => addToCart(toy)}
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
      <section
        style={{
          position: "sticky",
          bottom: "0",
          borderTop: "1px solid gray",
          padding: "10px 250px",
          background: "white",
          height: "40px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link to="/pet-toys" style={{ textDecoration: "none", color: "#00008B" }}>
          <p><strong>&lt;&lt; Back</strong></p>
        </Link>
        <Link to="/cat-toy" style={{ textDecoration: "none", color: "#00008B" }}>
          <p><strong>Cat Toys &gt;&gt;</strong></p>
        </Link>
      </section>
    </div>
  );
}

export default Dogtoys;
