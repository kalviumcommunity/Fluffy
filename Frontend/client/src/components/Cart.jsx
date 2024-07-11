import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../HomeComponents/Navbar";

const Cart = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get("http://localhost:1001/main/yourcart");
      if (response.data && Array.isArray(response.data)) {
        const updatedItems = response.data.map(item => ({
          ...item,
          quantity: parseInt(item.quantity, 10) || 1 // Set default quantity to 1 if not provided
        }));
        setItems(updatedItems);
      } else {
        console.error("Invalid data format received from server");
      }
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  const handleQuantityChange = (productId, change) => {
    const updatedItems = items.map(item => {
      if (item._id === productId) {
        const newQuantity = item.quantity + change;
        return {
          ...item,
          quantity: newQuantity > 0 ? newQuantity : item.quantity 
        };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const calculateTotalCartValue = () => {
    let total = 0;
    items.forEach(item => {
      total += item.productprice * item.quantity;
    });
    return total.toFixed(2); // Round the total to two decimal places
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:1001/main/addtocart/${id}`);
      console.log(res);
      setItems(items.filter(item => item._id !== id)); // Update items list after deletion
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          marginTop: "20px",
          border: "1px solid black",
          padding: "10px",
        }}
      >
        <h2>Cart</h2>
        {items && items.length > 0 ? (
          <div>
            {items.map((item) => (
              <div
                key={item._id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <img
                  src={item.productimage}
                  alt={item.productname}
                  style={{ height: "100px", marginRight: "20px" }}
                />
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "35vw" }}>
                  <h4>{item.productname}</h4>
                  <p>Price: 💲{item.productprice}</p>
                  <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
                    <button onClick={() => handleQuantityChange(item._id, -1)}>-</button>
                    <p style={{ margin: "0 10px" }}>{item.quantity}</p>
                    <button onClick={() => handleQuantityChange(item._id, 1)}>+</button>
                  </div>
                  <p style={{ marginLeft: "20px" }}>Total: 💲{(item.productprice * item.quantity).toFixed(2)}</p>
                </div>
                <img src="https://cdn-icons-png.flaticon.com/128/6861/6861362.png" onClick={() => handleDelete(item._id)} style={{ height: "25px", cursor: "pointer" }}></img>
              </div>
            ))}
            <hr />
            <p style={{ textAlign: "right", fontWeight: "bold" }}>
              Total Cart Value: 💲{calculateTotalCartValue()}
            </p>
          </div>
        ) : (
          <p style={{ textAlign: "center" }}>Your cart is empty</p>
        )}
      </div>
    </>
  );
};

export default Cart;
