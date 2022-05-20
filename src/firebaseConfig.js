import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "vibe-check-fed12.firebaseapp.com",
  databaseURL: "https://vibe-check-fed12-default-rtdb.firebaseio.com",
  projectId: "vibe-check-fed12",
  storageBucket: "vibe-check-fed12.appspot.com",
  messagingSenderId: "298854749525",
  appId: "1:298854749525:web:91d444ab94689d3a248bdc"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

// Reference to Firebase database to be used in other components
const database = getDatabase(firebase);

export default database;
