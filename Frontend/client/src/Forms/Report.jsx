import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";

function Report() {
  // Pet's Details
  const [petanimal, setPetAnimal] = useState("");
  const [petname, setPetName] = useState("");
  const [petbreed, setPetBreed] = useState("");
  const [petage, setPetAge] = useState("");
  const [petgender, setPetGender] = useState("");
  const [petsize, setPetSize] = useState("");
  const [petcolor, setPetColor] = useState("");
  const [petdescription, setPetDescription] = useState("");
  const [petlastseen, setPetLastSeen] = useState("");
  const [petdatelost, setPetDateLost] = useState("");
  const [petlivesin, setpetLivesIn] = useState("");
  const [petimage, setPetImage] = useState("");
  const [ownername, setOwnerName] = useState("");
  const [ownerphone, setOwnerPhone] = useState("");
  const [owneremail, setOwnerEmail] = useState("");
  const [owneraddress, setOwnerAddress] = useState("");
  const [imageUpload, setImageUpload] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (imageUpload) {
      const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
      uploadBytes(imageRef, imageUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then(async (url) => {
          setPetImage(url); // Set the uploaded image URL to the petimage state
          
          // Now submit the form data including the image URL
          try {
            const response = await axios.post("http://localhost:1001/main/postdata", {
              animal: petanimal,
              name: petname,
              breed: petbreed,
              age: petage,
              gender: petgender,
              size: petsize,
              color: petcolor,
              image: url, // Use the uploaded image URL here
              description: petdescription,
              lastSeen: petlastseen,
              dateLost: petdatelost,
              livesin: petlivesin,
              owner: {
                name: ownername,
                phone: ownerphone,
                email: owneremail,
                address: owneraddress,
              },
            });
            console.log("Posted Successfully", response);
            // Clear form fields after submission
            setPetAnimal("");
            setPetName("");
            setPetBreed("");
            setPetAge("");
            setPetGender("");
            setPetSize("");
            setPetColor("");
            setPetDescription("");
            setPetLastSeen("");
            setPetDateLost("");
            setpetLivesIn("");
            setOwnerName("");
            setOwnerPhone("");
            setOwnerEmail("");
            setOwnerAddress("");
            setImageUpload(null);
          } catch (err) {
            console.error("Error signing up:", err);
          }
        });
      });
    }
  };

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundImage: "linear-gradient(to bottom right, #FF5733, #FF0000)",
        color: "black",
      }}
    >
      <div
        style={{
          background: "white",
          height: "100%",
          borderTop: "3px dashed crimson",
          borderBottom: "3px dashed crimson",
          padding: "20px",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            width: "70vw",
            padding: "20px",
          }}
        >
          <h1 style={{ textAlign: "center", color: "crimson", fontSize: "1.8em" }}>
            Report Form
          </h1>
          <hr style={{ margin: "20px 0" }} />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "20px 40px",
              backgroundColor: "white",
              padding: "30px",
            }}
          >
            <div style={{ marginBottom: "20px" }}>
              <label style={{ color: "black" }}>Pet Animal :</label>
              <select
                onChange={(e) => setPetAnimal(e.target.value)}
                value={petanimal}
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "none",
                  borderBottom: "1px solid gray",
                  backgroundColor: "white",
                  color: "black",
                }}
                required
              >
                <option value="">Select Animal</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
              </select>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ color: "black" }}>Pet name :</label>
              <input
                type="text"
                placeholder="Enter pet's name"
                onChange={(e) => setPetName(e.target.value)}
                value={petname}
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "none",
                  borderBottom: "1px solid gray",
                  backgroundColor: "white",
                  color: "black",
                }}
                required
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ color: "black" }}>Pet Breed :</label>
              <input
                type="text"
                placeholder="Enter pet's breed"
                onChange={(e) => setPetBreed(e.target.value)}
                value={petbreed}
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "none",
                  borderBottom: "1px solid gray",
                  backgroundColor: "white",
                  color: "black",
                }}
                required
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ color: "black" }}>Pet Age :</label>
              <select
                onChange={(e) => setPetAge(e.target.value)}
                value={petage}
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "none",
                  borderBottom: "1px solid gray",
                  backgroundColor: "white",
                  color: "black",
                }}
                required
              >
                <option value="">Select Age</option>
                <option value="Kittens/Puppies">Kittens/Puppies</option>
                <option value="Young">Young</option>
                <option value="Old/Seniors">Old/Seniors</option>
              </select>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label style={{ color: "black" }}>Pet Gender :</label>
              <select
                onChange={(e) => setPetGender(e.target.value)}
                value={petgender}
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "none",
                  borderBottom: "1px solid gray",
                  backgroundColor: "white",
                  color: "black",
                }}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label style={{ color: "black" }}>Pet Size :</label>
              <select
                onChange={(e) => setPetSize(e.target.value)}
                value={petsize}
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "none",
                  borderBottom: "1px solid gray",
                  backgroundColor: "white",
                  color: "black",
                }}
                required
              >
                <option value="">Select Size</option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
              </select>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ color: "black" }}>Pet Color :</label>
              <input
                type="text"
                placeholder="Enter pet's color"
                onChange={(e) => setPetColor(e.target.value)}
                value={petcolor}
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "none",
                  borderBottom: "1px solid gray",
                  backgroundColor: "white",
                  color: "black",
                }}
                required
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ color: "black" }}>Pet Image :</label>
              <input
                type="file"
                onChange={(event) => setImageUpload(event.target.files[0])}
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "none",
                  borderBottom: "1px solid gray",
                  backgroundColor: "white",
                  color: "black",
                }}
                required
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ color: "black" }}>Pet Last seen :</label>
              <input
                type="text"
                placeholder="Enter pet's last seen location"
                onChange={(e) => setPetLastSeen(e.target.value)}
                value={petlastseen}
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "none",
                  borderBottom: "1px solid gray",
                  backgroundColor: "white",
                  color: "black",
                }}
                required
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ color: "black" }}>Pet Date Lost :</label>
              <input
                type="text"
                placeholder="Enter pet's lost date"
                onChange={(e) => setPetDateLost(e.target.value)}
                value={petdatelost}
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "none",
                  borderBottom: "1px solid gray",
                  backgroundColor: "white",
                  color: "black",
                }}
                required
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ color: "black" }}>Pet From :</label>
              <input
                type="text"
                placeholder="Enter where do you live?"
                onChange={(e) => setpetLivesIn(e.target.value)}
                value={petlivesin}
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "none",
                  borderBottom: "1px solid gray",
                  backgroundColor: "white",
                  color: "black",
                }}
                required
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ color: "black" }}>Pet Description :</label>
              <textarea
                placeholder="Enter pet's description"
                onChange={(e) => setPetDescription(e.target.value)}
                value={petdescription}
                style={{
                  width: "100%",
                  padding: "5px",
                  border: "1px solid gray",
                  backgroundColor: "white",
                  color: "black",
                  resize: "vertical",
                }}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "black",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Report;
