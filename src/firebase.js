import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";  // Import the Firebase Auth module

const firebaseConfig = {
  apiKey: "AIzaSyDg4Vcr252YgNyBqLO8mxH-8cAY0iaaRmU",
  authDomain: "employee-registration-7e500.firebaseapp.com",
  projectId: "employee-registration-7e500",
  storageBucket: "employee-registration-7e500.appspot.com",
  messagingSenderId: "705374238301",
  appId: "1:705374238301:web:1d61a5de7f88f416353fb4",
  measurementId: "G-NEWM8042Z8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore, Storage, and Auth
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);  

export { db, storage, auth };  
