// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import { getDatabase } from '@firebase/database';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNtdwFtBfZ6POu0hgj50mUbeB2hifJGBQ",
  authDomain: "terrabyte-6727a.firebaseapp.com",
  projectId: "terrabyte-6727a",
  storageBucket: "terrabyte-6727a.appspot.com",
  messagingSenderId: "716295067675",
  appId: "1:716295067675:web:f218d958aa92ac6e2b40be",
  measurementId: "G-80BTWPRY7X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export {auth ,database};
