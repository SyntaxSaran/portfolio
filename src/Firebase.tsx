
import { initializeApp } from "firebase/app"; 
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDKOMNekCi6LcUOSN8XvdSJXEaiMQkQbj8",
  authDomain: "portfolio-de242.firebaseapp.com",
  projectId: "portfolio-de242",
  storageBucket: "portfolio-de242.firebasestorage.app",
  messagingSenderId: "766522257510",
  appId: "1:766522257510:web:4553182e4144cdc55cbda7",
  measurementId: "G-Q6LV8D2022"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);