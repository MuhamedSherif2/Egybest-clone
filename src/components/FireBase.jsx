import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAzSsWllPLiO_j64Wp2R7ABKbcNKAizu4g",
  authDomain: "watch-it-ed9ab.firebaseapp.com",
  projectId: "watch-it-ed9ab",
  storageBucket: "watch-it-ed9ab.firebasestorage.app",
  messagingSenderId: "6604659920",
  appId: "1:6604659920:web:b5db6cc9dc8e2724bb12d5",
  measurementId: "G-L6BS8ZP8XD"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
