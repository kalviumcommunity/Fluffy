// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7pz9KVqqTGmTiNGPPXXTeh8e1pjwjndg",
  authDomain: "pet-photos-capstone.firebaseapp.com",
  projectId: "pet-photos-capstone",
  storageBucket: "pet-photos-capstone.appspot.com",
  messagingSenderId: "556805239361",
  appId: "1:556805239361:web:925dc1cabaa42456198cc0",
  measurementId: "G-8V44ZLNZGQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);