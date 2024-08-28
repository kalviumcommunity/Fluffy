import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase"; // Make sure to adjust the import path to your firebase configuration file
import { v4 } from "uuid";

function Report() {
  const [petInfo, setPetInfo] = useState({
    petAnimal: '',
    petName: '',
    petBreed: '',
    petAge: '',
    petGender: '',
    petColor: '',
    petSize: '',
    petDescription: '',
    petLastSeen: '',
    petDateLost: '',
    petLivesIn: '',
    petImage: '',
  });

  const [imageUpload, setImageUpload] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInput = (event) => {
    const { name, value } = event.target;
    setPetInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (imageUpload) {
      const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
      
      try {
        // Upload the image to Firebase Storage
        const snapshot = await uploadBytes(imageRef, imageUpload);
        
        // Get the download URL of the uploaded image
        const url = await getDownloadURL(snapshot.ref);
        
        // Update the petInfo state with the image URL
        setPetInfo((prevState) => ({
          ...prevState,
          petImage: url,
        }));

        // Post the form data including the image URL
        const response = await axios.post("http://localhost:1001/main/postdata", {
          ...petInfo,
          petImage: url, // Ensure the image URL is included in the data
        });

        console.log("Posted Successfully", response);
        
        // Clear form fields after submission
        setPetInfo({
          petAnimal: '',
          petName: '',
          petBreed: '',
          petAge: '',
          petGender: '',
          petColor: '',
          petSize: '',
          petDescription: '',
          petLastSeen: '',
          petDateLost: '',
          petLivesIn: '',
          petImage: '',
        });
        setImageUpload(null);
      } catch (err) {
        console.error("Error posting data:", err);
      } finally {
        setLoading(false);
        setTimeout(() => {
          navigate("/report-pets");
        }, 5000);
      }
    } else {
      alert("Please upload an image.");
      setLoading(false);
    }
  };

  return (
    <div>
      <div
        style={{
          background: "white",
          borderTop: "3px dashed crimson",
          borderBottom: "3px dashed crimson",
          padding: "20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "5px",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            width: "60vw",
            padding: "20px",
          }}
        >
          <h1 style={{ textAlign: "center", color: "crimson", fontSize: "1.8em" }}>
            Adopt and Report Form
          </h1>
          <hr style={{ margin: "20px 0" }} />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "20px",
              backgroundColor: "white",
              padding: "20px",
            }}
          >
            <div>
              <label style={{ color: "black" }}>Form Type :</label>
              <select
                name="petType"
                onChange={handleInput}
                value={petInfo.petType}
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
                <option value="">Select form type</option>
                <option value="adopt">Adopt</option>
                <option value="report">Report</option>
              </select>
            </div>
            <div>
              <label style={{ color: "black" }}>Pet name :</label>
              <input
                type="text"
                name="petName"
                placeholder="Enter pet's name"
                onChange={handleInput}
                value={petInfo.petName}
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
            <div>
              <label style={{ color: "black" }}>Pet Animal :</label>
              <select
                name="petAnimal"
                onChange={handleInput}
                value={petInfo.petAnimal}
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
              <label style={{ color: "black" }}>Pet Breed :</label>
              <input
                type="text"
                name="petBreed"
                placeholder="Enter pet's breed"
                onChange={handleInput}
                value={petInfo.petBreed}
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
            <div>
              <label style={{ color: "black" }}>Pet Age :</label>
              <select
                name="petAge"
                onChange={handleInput}
                value={petInfo.petAge}
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
                <option value="Kitten">Kitten</option>
                <option value="Puppy">Puppy</option>
                <option value="Young">Young</option>
                <option value="Senior">Old/Seniors</option>
              </select>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ color: "black" }}>Pet Gender :</label>
              <select
                name="petGender"
                onChange={handleInput}
                value={petInfo.petGender}
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
            <div>
              <label style={{ color: "black" }}>Pet Size :</label>
              <select
                name="petSize"
                onChange={handleInput}
                value={petInfo.petSize}
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
                name="petColor"
                placeholder="Enter pet's color"
                onChange={handleInput}
                value={petInfo.petColor}
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
            <div>
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
            <div style={{ gridColumn: "span 3" }}>
              <label style={{ color: "black" }}>Pet Description :</label>
              <textarea
                name="petDescription"
                placeholder="Provide any additional details about the pet."
                onChange={handleInput}
                value={petInfo.petDescription}
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "none",
                  borderBottom: "1px solid gray",
                  backgroundColor: "white",
                  color: "black",
                  minHeight: "100px",
                }}
                required
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ color: "black" }}>Pet Last Seen :</label>
              <input
                type="text"
                name="petLastSeen"
                placeholder="Enter the last known location of the pet"
                onChange={handleInput}
                value={petInfo.petLastSeen}
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
              <label style={{ color: "black" }}>Date Lost :</label>
              <input
                type="date"
                name="petDateLost"
                onChange={handleInput}
                value={petInfo.petDateLost}
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
            <div>
              <label style={{ color: "black" }}>Pet From :</label>
              <input
                type="text"
                name="petLivesIn"
                placeholder="Enter city or area"
                onChange={handleInput}
                value={petInfo.petLivesIn}
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
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              border: "none",
              backgroundColor: "crimson",
              color: "white",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Report;
