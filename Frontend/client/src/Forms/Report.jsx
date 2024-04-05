import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Report() {
  // Pet's Details...
  const [petanimal, setPetAnimal] = useState("")
  const [petname, setPetName] = useState("");
  const [petbreed, setPetBreed] = useState("");
  const [petage, setPetAge] = useState("");
  const [petgender, setPetGender] = useState("");
  const [petsize, setPetSize] = useState("");
  const [petcolor, setPetColor] = useState("");
  const [petimage, setPetImage] = useState("");
  const [petdescription, setPetDescription] = useState("");
  const [petlastseen, setPetLastSeen] = useState("");
  const [petdatelost, setPetDateLost] = useState("");
  const [petlivesin, setpetLivesIn] = useState("");
  const navigate = useNavigate();

  //Owner's Details...
  const [ownername, setOwnerName] = useState("");
  const [ownerphone, setOwnerPhone] = useState("");
  const [owneremail, setOwnerEmail] = useState("");
  const [owneraddress, setOwnerAddress] = useState("");

  //Submission form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:1001/main/postdata", {
        animal:petanimal,
        name: petname,
        breed: petbreed,
        age: petage,
        gender: petgender,
        size: petsize,
        color: petcolor,
        image: petimage,
        description: petdescription,
        lastSeen: petlastseen,
        dateLost: petdatelost,
        from:petlivesin
      });
      console.log("Posted Successfully", response);
      setPetName("");
      setPetBreed("");
      setPetAge("");
      setPetGender("");
      setPetSize("");
      setPetColor("");
      setPetImage("");
      setPetDescription("");
      navigate("/lost-and-found");
    } catch (err) {
      console.error("Error signing up:", err);
    }
  };

  return (
    <div
      style={{
        height: "80%",
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
          height:"100%",
          borderTop:"3px dashed crimson",
          borderBottom:"3px dashed crimson",
          padding:"20px"
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            width: "70vw",
            padding: "20px",
          }}
        >
          <h2 style={{ textAlign: "center", color: "crimson" }}>Report Form</h2>
          <hr />
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
                <option value="">Select Age</option>
                <option value="Kittens/Puppies">Dog</option>
                <option value="Young">Cat</option>
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
                <option value="Big">Big</option>
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
                type="text"
                placeholder="Enter pet's image URL"
                onChange={(e) => setPetImage(e.target.value)}
                value={petimage}
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
